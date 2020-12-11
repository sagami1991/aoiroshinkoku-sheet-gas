import { IKamoku } from "interface";
import { AbstractSheet } from "./abstractSheet";

/** 科目マスタシートへの読み込みを行う */
export class KamokuSheet extends AbstractSheet {

    protected getSheetName() {
        return "科目マスタ";
    }

    public getRecords(): IKamoku[] {
        const values = this.sheet.getRange("A:G").getValues();
        const kamokuRecords: IKamoku[] = [];
        values.shift();
        for (const row of values) {
            const kamoku: IKamoku = {
                outputOrder: row[2] as number,
                name: row[0] as string,
                kashikariType: row[1] as any,
                seisanType: row[3] as any,
            };
            kamokuRecords.push(kamoku);
        }
        return kamokuRecords;
    }
}
