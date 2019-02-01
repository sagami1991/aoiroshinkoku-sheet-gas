import { IShiwake, ISoukanjo } from "./interface";
import { ShiwakeRepository, IShiwakeRepository } from "repository/ShiwakeRepository";
import { KamokuRepository } from "repository/KamokuRepository";
import { SoukanjoRepository, ISoukanjoRepository } from "repository/SoukanjoRepository";
import { CommonUtils } from "CommonUtil";

global.main = () => {
    const shiwakeRepository = new ShiwakeRepository();
    const kamokuRepository = new KamokuRepository();
    const soukanjoRepository = new SoukanjoRepository();
    const app = new Calculator(shiwakeRepository, kamokuRepository, soukanjoRepository);
    const soukanjoRecords = app.calcSoukanjomotocho();
    soukanjoRepository.insertRecords(soukanjoRecords);
};

export class Calculator {
    public constructor(
        private shiwakeRepository: IShiwakeRepository,
        private kamokuRepository: KamokuRepository,
        private soukanjoRepository: ISoukanjoRepository
    ) {
    }

    /** 総勘定元帳 */
    public calcSoukanjomotocho() {
        const shiwakeRecords = this.shiwakeRepository.getRecords();
        const kamokuRecords = this.kamokuRepository.getRecords();
        const zandaka: { [kamoku: string]: number } = {};
        for (const kamoku of kamokuRecords) {
            zandaka[kamoku.kamokuName] = 0;
        }
        let soukanjoRecords: ISoukanjo[] = [];
        for (const shiwake of shiwakeRecords) {
            if (kamokuRecords.some(kamoku => kamoku.kamokuName === shiwake.kariKamoku)) {
                zandaka[shiwake.kariKamoku] += shiwake.kariPrice;
                soukanjoRecords.push({
                    date: shiwake.date,
                    kamoku: shiwake.kariKamoku,
                    aiteKamoku: shiwake.kashiKamoku,
                    summary: shiwake.summary,
                    kariPrice: shiwake.kariPrice,
                    kashiPrice: 0,
                    zandaka: zandaka[shiwake.kariKamoku],
                });
            } else if (kamokuRecords.some(kamoku => kamoku.kamokuName === shiwake.kashiKamoku)) {
                zandaka[shiwake.kashiKamoku] += shiwake.kashiPrice;
                soukanjoRecords.push({
                    date: shiwake.date,
                    kamoku: shiwake.kashiKamoku,
                    aiteKamoku: shiwake.kariKamoku,
                    summary: shiwake.summary,
                    kariPrice: 0,
                    kashiPrice: shiwake.kashiPrice,
                    zandaka: zandaka[shiwake.kashiKamoku],
                });
            }
        }

        soukanjoRecords = CommonUtils.sortArray(soukanjoRecords, [
            { keyName: "kamoku", type: "ASC" },
            { keyName: "date", type: "ASC" },
        ]);
        return soukanjoRecords;
    }
}
