import { IShiwake } from "interface";
import { AbstractSheet } from "./abstractSheet";

export interface IShiwakeRepository {
    getRecords(): IShiwake[];
}

/** 仕訳帳シートへの読み込みを行う */
export class ShiwakeSheet extends AbstractSheet implements IShiwakeRepository {
    private static START_ROW_NUM = 2;

    protected getSheetName() {
        return "仕訳帳";
    }

    public getRecords() {
        const values = this.sheet.getRange("A:G").getValues();
        const shiwakeRecords: IShiwake[] = [];
        for (let i = 0; i < ShiwakeSheet.START_ROW_NUM; i++) {
            values.shift();
        }
        let rowIndex = ShiwakeSheet.START_ROW_NUM;
        for (const row of values) {
            if (!row[0]) {
                break;
            }
            rowIndex++
            const shiwake: IShiwake = {
                id: 0,
                date: row[0] as Date,
                kariKamoku: row[1] as string,
                kariPrice: row[2] as number,
                kashiKamoku: row[3] as string,
                kashiPrice: row[4] as number,
                summary: row[5] as string
            };
            if (!(shiwake.date instanceof Date)) {
                throw new Error(`日付が日付形式で入力されていません。仕訳帳シート ${rowIndex}行目A列`)
            }
            if (typeof shiwake.kariPrice !== "number") {
                throw new Error(`借方金額が数字で入力されていません。仕訳帳シート ${rowIndex}行目C列`)
            }
            if (typeof shiwake.kashiPrice !== "number") {
                throw new Error(`貸方金額が数字で入力されていません。仕訳帳シート ${rowIndex}行目E列`)
            }
            shiwakeRecords.push(shiwake);
        }
        const result = Browser.msgBox(`仕訳帳シートを ${rowIndex} 行目まで読み込みました。\\n以下のシートを上書きし作成してよろしいでしょうか。\\n・「総勘定元帳」\\n・「損益計算書」\\n・「貸借対照表」`, Browser.Buttons.OK_CANCEL)
        if (result === 'cancel') {
            throw new Error('キャンセルされました');
        }
        console.log(`仕訳帳シートから ${shiwakeRecords.length} 行読み込みました`);
        return shiwakeRecords;
    }
}
