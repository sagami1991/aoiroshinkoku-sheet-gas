
interface IKamoku {
    /** 総勘定元帳の出力順 */
    outputOrder: number;
    kamokuName: string;
    /**
     * - 借方→借方科目にいるとき残高がプラスになり、貸方科目にいるとき残高がマイナスになる？
     * - 貸方→借方科目にいるとき残高がマイナスになり、貸方科目にいるとき残高がプラスになる？
     */
    kashikariType: "借方" | "貸方";
}
/** 口座が増える借方の科目名？わからん */
export class KamokuRepository {

    public getRecords(): IKamoku[] {
        return [
            {
                outputOrder: 2,
                kamokuName: "事業主借",
                kashikariType: "貸方"
            }, {
                outputOrder: 0,
                kamokuName: "普通預金",
                kashikariType: "借方"
            }, {
                outputOrder: 1,
                kamokuName: "売上",
                kashikariType: "貸方"
            }, {
                outputOrder: 2,
                kamokuName: "事業主貸",
                kashikariType: "借方"
            }, {
                outputOrder: 1,
                kamokuName: "売掛金",
                kashikariType: "借方"
            }, {
                outputOrder: 5,
                kamokuName: "旅費交通費",
                kashikariType: "借方"
            }, {
                outputOrder: 3,
                kamokuName: "地代家賃",
                kashikariType: "借方"
            }, {
                outputOrder: 3,
                kamokuName: "水道光熱費",
                kashikariType: "借方"
            }, {
                outputOrder: 3,
                kamokuName: "通信費",
                kashikariType: "借方"
            }, {
                outputOrder: 4,
                kamokuName: "消耗品費",
                kashikariType: "借方"
            }, {
                outputOrder: 4,
                kamokuName: "接待交際費",
                kashikariType: "借方"
            },
        ];
    }
}
