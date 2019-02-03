import { IShisan } from "interface";
import { AbstractSheet } from "./AbstractSheet";

export interface IShisanSheet {
    insertRecords(shisanRecords: IShisan[]): void;
}

/** 試算表シートへの書き込みを行う */
export class ShisanSheet extends AbstractSheet implements IShisanSheet {
    private static START_ROW_NUM = 3;
    private static COLUMN_LENGTH = 5;

    protected getSheetName() {
        return "試算表";
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
        this.sheet.getRange(ShisanSheet.START_ROW_NUM, 1, 1000, ShisanSheet.COLUMN_LENGTH).clearContent();
        const range = this.sheet.getRange(ShisanSheet.START_ROW_NUM, 1, rows.length, ShisanSheet.COLUMN_LENGTH);
        range.setValues(rows);
    }
}

/** 貸借対照表シートへの書き込みを行う */
export class KashiKariTaishoSheet extends ShisanSheet {
    protected getSheetName() {
        return "貸借対照表";
    }
}

/** 損益計算書シートへの書き込みを行う */
export class SonekiKeisanSheet extends ShisanSheet {
    protected getSheetName() {
        return "損益計算書";
    }
}