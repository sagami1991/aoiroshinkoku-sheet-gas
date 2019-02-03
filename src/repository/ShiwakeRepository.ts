import { IShiwake } from "interface";
export interface IShiwakeRepository {
    getRecords(): IShiwake[];
}
export class ShiwakeRepository implements IShiwakeRepository {
    private sheet: GoogleAppsScript.Spreadsheet.Sheet;
    constructor() {
        const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
        this.sheet = spreadSheet.getSheetByName("仕訳帳");
    }

    public getRecords() {
        const values = this.sheet.getRange("A:G").getValues();
        const shiwakeRecords: IShiwake[] = [];
        values.shift(); // 1行目ヘッダ行スキップ
        for (const row of values) {
            if (row[0] === undefined || row[0] === null) {
                break;
            }
            const shiwake: IShiwake = {
                id: row[0] as number,
                date: row[1] as Date,
                kariKamoku: row[2] as string,
                kariPrice: row[3] as number,
                kashiKamoku: row[4] as string,
                kashiPrice: row[5] as number,
                summary: row[6] as string
            };
            shiwakeRecords.push(shiwake);
        }
        return shiwakeRecords;
    }
}
