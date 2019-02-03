import { IShisan } from "interface";

export interface IShisanSheet {
    insertRecords(shisanRecords: IShisan[]): void;
}

/** 試算表シートへの書き込みを行う */
export class ShisanSheet implements IShisanSheet {
    private sheet: GoogleAppsScript.Spreadsheet.Sheet;
    private static START_ROW_NUM = 3;
    private static COLUMN_LENGTH = 5;
    constructor() {
        const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
        this.sheet = spreadSheet.getSheetByName("試算表");
    }

    public insertRecords(shisanRecords: IShisan[]) {
        const rows = shisanRecords.map(shisan => {
            return [
                shisan.kamokuName,
                shisan.totalKariPrice,
                shisan.totalKashiPrice,
                shisan.kariZandaka,
                shisan.kashiZandaka,
            ];
        });
        this.sheet.getRange(ShisanSheet.START_ROW_NUM, 1, 1000, ShisanSheet.COLUMN_LENGTH);
        const range = this.sheet.getRange(ShisanSheet.START_ROW_NUM, 1, rows.length, ShisanSheet.COLUMN_LENGTH);
        range.setValues(rows);
    }
}
