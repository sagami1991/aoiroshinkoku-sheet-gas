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
        const values = this.sheet.getRange("A:F").getValues();
        const shiwakeRecords: IShiwake[] = [];
        values.shift();
        for (const row of values) {
            if (!row[0]) {
                break;
            }
            const shiwake: IShiwake = {
                date: row[0] as Date,
                kariKamoku: row[1] as string,
                kariPrice: row[2] as number,
                kashiKamoku: row[3] as string,
                kashiPrice: row[4] as number,
                summary: row[5] as string
            };
            shiwakeRecords.push(shiwake);
        }
        return shiwakeRecords;
    }
}
