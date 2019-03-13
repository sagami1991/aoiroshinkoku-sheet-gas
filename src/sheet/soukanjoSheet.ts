import { ISoukanjo } from "interface";
import { AbstractSheet } from "./abstractSheet";

export interface ISoukanjoSheet {
    insertRecords(soukanjoRecords: ISoukanjo[]): void;
}

/** 総勘定元帳シートへの書き込みを行う */
export class SoukanjoSheet extends AbstractSheet implements ISoukanjoSheet {
    private static START_ROW_NUM = 2;

    protected getSheetName() {
        return "総勘定元帳";
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
                rows.push([`勘定科目名: ${soukanjo.kamoku}`, "", "", "", "", "", "", ""]);
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
        this.sheet.getRange(SoukanjoSheet.START_ROW_NUM, 1, 1000, header.length).clearContent();
        const range = this.sheet.getRange(SoukanjoSheet.START_ROW_NUM, 1, rows.length, header.length);
        range.setValues(rows);
        console.log(`総勘定元帳シートに${soukanjoRecords.length}行書き込みました`);
    }
}
