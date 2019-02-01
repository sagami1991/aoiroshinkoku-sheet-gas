import { ISoukanjo } from "interface";

export interface ISoukanjoRepository {
    insertRecords(soukanjoRecords: ISoukanjo[]): void;
}

export class SoukanjoRepository implements ISoukanjoRepository {
    private sheet: GoogleAppsScript.Spreadsheet.Sheet;
    constructor() {
        const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
        this.sheet = spreadSheet.getSheetByName("総勘定元帳");
    }

    public insertRecords(soukanjoRecords: ISoukanjo[]) {
        const rows = soukanjoRecords.map(soukanjo => {
            return [
                soukanjo.date,
                soukanjo.kamoku,
                soukanjo.aiteKamoku,
                soukanjo.summary,
                soukanjo.kariPrice,
                soukanjo.kashiPrice,
                soukanjo.zandaka
            ];
        });
        this.sheet.getRange("A2:G1000").clear();
        this.sheet.insertRows(2, rows.length);
        this.sheet.getRange(2, 1, rows.length, 7).setValues(rows);
    }

}
