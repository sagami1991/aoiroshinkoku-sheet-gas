import { IKamoku } from "interface";

/** 科目マスタシートへの読み込みを行う */
export class KamokuSheet {

    public getRecords(): IKamoku[] {
        return [
            {
                outputOrder: 2,
                name: "事業主借",
                kashikariType: "貸方",
                seisanType: "貸借対照表",
            }, {
                outputOrder: 0,
                name: "普通預金",
                kashikariType: "借方",
                seisanType: "貸借対照表",
            }, {
                outputOrder: 1,
                name: "売上",
                kashikariType: "貸方",
                seisanType: "損益計算書",
            }, {
                outputOrder: 2,
                name: "事業主貸",
                kashikariType: "借方",
                seisanType: "貸借対照表",
            }, {
                outputOrder: 1,
                name: "売掛金",
                kashikariType: "借方",
                seisanType: "貸借対照表",
            }, {
                outputOrder: 5,
                name: "旅費交通費",
                kashikariType: "借方",
                seisanType: "損益計算書",
            }, {
                outputOrder: 3,
                name: "地代家賃",
                kashikariType: "借方",
                seisanType: "損益計算書"
            }, {
                outputOrder: 3,
                name: "水道光熱費",
                kashikariType: "借方",
                seisanType: "損益計算書",
            }, {
                outputOrder: 3,
                name: "通信費",
                kashikariType: "借方",
                seisanType: "損益計算書",
            }, {
                outputOrder: 4,
                name: "消耗品費",
                kashikariType: "借方",
                seisanType: "損益計算書",
            }, {
                outputOrder: 4,
                name: "接待交際費",
                kashikariType: "借方",
                seisanType: "損益計算書",
            },
        ];
    }
}