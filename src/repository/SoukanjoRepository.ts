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
        const header = ["仕訳帳ID", "日付", "勘定科目", "相手勘定科目", "摘要", "借方金額（円）", "貸方金額（円）", "残高（円）"];
        let beforeKamokuName = "";
        const rows: any[][] = [];
        // const titleRowNumbers: number[] = [];
        for (const soukanjo of soukanjoRecords) {
            if (soukanjo.kamoku !== beforeKamokuName) {
                beforeKamokuName = soukanjo.kamoku;
                if (rows.length !== 0) {
                    rows.push(["", "", "", "", "", "", "", ""]); // 空行の追加
                }
                rows.push([`科目名: ${soukanjo.kamoku}`, "", "", "", "", "", "", ""]);
                // titleRowNumbers.push(rows.length);
                rows.push(header);
            }
            const row = [
                soukanjo.shiwakeId,
                soukanjo.date,
                soukanjo.kamoku,
                soukanjo.aiteKamoku,
                soukanjo.summary,
                soukanjo.kariPrice,
                soukanjo.kashiPrice,
                soukanjo.zandaka
            ];
            rows.push(row);
        }
        this.sheet.clearContents();
        this.sheet.insertRows(1, rows.length);
        const range = this.sheet.getRange(1, 1, rows.length, header.length);
        range.setValues(rows);
        // for (const rowNumber of titleRowNumbers) {
        //     this.sheet.getRange(rowNumber, 1).setFontSize(18);
        //     this.sheet.getRange(rowNumber, 1).setFontWeight("bold");
        // }
    }
}
