import { ISoukanjo } from "interface";

export interface ISoukanjoSheet {
    insertRecords(soukanjoRecords: ISoukanjo[]): void;
}

/** 総勘定元帳シートへの書き込みを行う */
export class SoukanjoSheet implements ISoukanjoSheet {
    private sheet: GoogleAppsScript.Spreadsheet.Sheet;
    private static START_ROW_NUM = 2;
    constructor() {
        const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
        this.sheet = spreadSheet.getSheetByName("総勘定元帳");
    }

    public insertRecords(soukanjoRecords: ISoukanjo[]) {
        const header = ["仕訳帳ID", "日付", "勘定科目", "相手勘定科目", "摘要", "借方金額（円）", "貸方金額（円）", "残高（円）"];
        let beforeKamokuName = "";
        const rows: any[][] = [];
        for (const soukanjo of soukanjoRecords) {
            if (soukanjo.kamoku !== beforeKamokuName) {
                beforeKamokuName = soukanjo.kamoku;
                if (rows.length !== 0) {
                    rows.push(["", "", "", "", "", "", "", ""]); // 空行の追加
                }
                rows.push([`科目名: ${soukanjo.kamoku}`, "", "", "", "", "", "", ""]);
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
        const range = this.sheet.getRange(SoukanjoSheet.START_ROW_NUM, 1, rows.length, header.length);
        range.setValues(rows);
        console.log(`総勘定元帳シートに${soukanjoRecords.length}行書き込みました`);
    }
}
