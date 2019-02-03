import { IShiwake, ISoukanjo, IShisan } from "./interface";
import { ShiwakeSheet, IShiwakeRepository } from "sheet/ShiwakeSheet";
import { KamokuSheet } from "sheet/KamokuSheet";
import { SoukanjoSheet, ISoukanjoSheet } from "sheet/SoukanjoSheet";
import { CommonUtils } from "CommonUtil";
import { ShisanSheet, KashiKariTaishoSheet, SonekiKeisanSheet } from "sheet/ShisanSheet";

/** 実行元 */
global.main = () => {
    const shiwakeSheet = new ShiwakeSheet();
    const kamokuSheet = new KamokuSheet();
    const soukanjoSheet = new SoukanjoSheet();
    const shisanSheet = new ShisanSheet();
    const kashiKariTaishoSheet = new KashiKariTaishoSheet();
    const sonekiKeisanSheet = new SonekiKeisanSheet();

    const app = new Calculator(shiwakeSheet, kamokuSheet);
    const soukanjoRecords = app.calcSoukanjomotocho();
    const shisanRecords = app.calcShisan(soukanjoRecords);

    soukanjoSheet.insertRecords(soukanjoRecords);
    shisanSheet.insertRecords(shisanRecords);
    kashiKariTaishoSheet.insertRecords(app.calcKessan(shisanRecords, "貸借対照表"));
    sonekiKeisanSheet.insertRecords(app.calcKessan(shisanRecords, "損益計算書"));
};

/** 帳簿計算 */
export class Calculator {
    public constructor(
        private shiwakeRepository: IShiwakeRepository,
        private kamokuRepository: KamokuSheet,
    ) {
    }

    /** 総勘定元帳のレコード作成 */
    public calcSoukanjomotocho(): ISoukanjo[] {
        const shiwakeRecords = this.shiwakeRepository.getRecords();
        const kamokuRecords = this.kamokuRepository.getRecords();
        const kamokuMap = CommonUtils.arrayToMap(kamokuRecords, "name");
        const zandaka: { [kamoku: string]: number } = {};
        for (const kamoku of kamokuRecords) {
            zandaka[kamoku.name] = 0;
        }
        let soukanjoRecords: ISoukanjo[] = [];
        for (const shiwake of shiwakeRecords) {
            const kariKamoku = kamokuMap[shiwake.kariKamoku];
            if (kariKamoku === undefined) {
                throw new Error(`科目名: ${shiwake.kariKamoku} は、科目マスタに存在しない借方科目です`);
            }
            const plusMinusKari = kariKamoku.kashikariType === "借方" ? 1 : -1;
            zandaka[shiwake.kariKamoku] += shiwake.kariPrice * plusMinusKari;
            soukanjoRecords.push({
                shiwakeId: shiwake.id,
                kamokuOrder: kariKamoku.outputOrder,
                date: shiwake.date,
                kamoku: shiwake.kariKamoku,
                aiteKamoku: shiwake.kashiKamoku,
                summary: shiwake.summary,
                kariPrice: shiwake.kariPrice,
                kashiPrice: 0,
                zandaka: zandaka[shiwake.kariKamoku],
            });
            const kashiKamoku = kamokuMap[shiwake.kashiKamoku];
            if (kashiKamoku === undefined) {
                throw new Error(`科目名: ${shiwake.kashiKamoku} は、科目マスタに存在しない貸方科目です`);
            }
            const plusMinusKashi = kashiKamoku.kashikariType === "貸方" ? 1 : -1;
            zandaka[shiwake.kashiKamoku] += shiwake.kashiPrice * plusMinusKashi;
            soukanjoRecords.push({
                shiwakeId: shiwake.id,
                kamokuOrder: kashiKamoku.outputOrder,
                date: shiwake.date,
                kamoku: shiwake.kashiKamoku,
                aiteKamoku: shiwake.kariKamoku,
                summary: shiwake.summary,
                kariPrice: 0,
                kashiPrice: shiwake.kashiPrice,
                zandaka: zandaka[shiwake.kashiKamoku],
            });
        }
        soukanjoRecords = CommonUtils.sortArray(soukanjoRecords, [
            { keyName: "kamokuOrder", type: "ASC" },
            { keyName: "kamoku", type: "ASC" },
            { keyName: "date", type: "ASC" },
        ]);
        if (soukanjoRecords.length !== (shiwakeRecords.length * 2)) {
            throw new Error("総勘定元帳の出力行数が合いません");
        }
        return soukanjoRecords;
    }

    /** 試算表の作成 */
    public calcShisan(soukanjoRecords: ISoukanjo[]): IShisan[] {
        const shisanMap: {[kamokuName: string]: IShisan} = {};
        const kamokuRecords = this.kamokuRepository.getRecords();
        const kamokuMap = CommonUtils.arrayToMap(kamokuRecords, "name");
        for (const kamoku of kamokuRecords) {
            shisanMap[kamoku.name] = {
                order: kamoku.outputOrder,
                kamokuName: kamoku.name,
                kariZandaka: 0,
                kashiZandaka: 0,
                totalKariPrice: 0,
                totalKashiPrice: 0
            };
        }
        for (const soukanjo of soukanjoRecords) {
            const kamoku = kamokuMap[soukanjo.kamoku];
            const shisan = shisanMap[soukanjo.kamoku];
            if (kamoku === undefined) {
                throw new Error("科目マスタに存在しない勘定科目です");
            }
            const totalKariPrice = soukanjo.kariPrice;
            const totalKashiPrice = soukanjo.kashiPrice;
            const kariZandaka = kamoku.kashikariType === "借方" ? (soukanjo.kariPrice - soukanjo.kashiPrice) : 0;
            const kashiZandaka = kamoku.kashikariType === "貸方" ? (soukanjo.kashiPrice - soukanjo.kariPrice) : 0;
            shisan.totalKariPrice += totalKariPrice;
            shisan.totalKashiPrice += totalKashiPrice;
            shisan.kariZandaka += kariZandaka;
            shisan.kashiZandaka += kashiZandaka;
        }
        let shisanRecords = CommonUtils.mapToArray(shisanMap);
        shisanRecords = CommonUtils.sortArray(shisanRecords, [{
            keyName: "order", type: "ASC"
        }]);
        return shisanRecords;
    }

    /** 貸借対照表 or 損益計算書のレコード作成 */
    public calcKessan(shisanRecords: IShisan[], seisanType: "貸借対照表" | "損益計算書"): IShisan[] {
        const kamokuRecords = this.kamokuRepository.getRecords();
        const kamokuMap = CommonUtils.arrayToMap(kamokuRecords, "name");
        return shisanRecords.filter(shisan => kamokuMap[shisan.kamokuName].seisanType === seisanType);

    }
}
