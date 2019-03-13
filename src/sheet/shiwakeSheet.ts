import { IShiwake } from "interface";
import { AbstractSheet } from "./abstractSheet";
export interface IShiwakeRepository {
    getRecords(): IShiwake[];
}

/** 仕訳帳シートへの読み込みを行う */
export class ShiwakeSheet extends AbstractSheet implements IShiwakeRepository {

    protected getSheetName() {
        return "仕訳帳";
    }

    public getRecords() {
        const values = this.sheet.getRange("A:G").getValues();
        const shiwakeRecords: IShiwake[] = [];
        values.shift();
        values.shift();
        for (const row of values) {
            if (row[0] === undefined || row[0] === null || row[0] === "") {
                continue;
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
        console.log(`仕訳帳シートから ${shiwakeRecords.length} 行読み込みました`);
        return shiwakeRecords;
    }
}
