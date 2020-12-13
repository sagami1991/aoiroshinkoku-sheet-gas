/** シートの読み書きを行う基底クラス */
export abstract class AbstractSheet {
    protected sheet: GoogleAppsScript.Spreadsheet.Sheet;
    protected abstract getSheetName(): string;

    constructor() {
        const spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
        this.sheet = spreadSheet.getSheetByName(this.getSheetName());
    }
}
