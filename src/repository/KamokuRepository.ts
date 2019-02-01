
interface IKamoku {
    kamokuName: string;
    kasikariType: "借方" | "貸方";
}
/** 口座が増える借方の科目名？わからん */
export class KamokuRepository {

    public getRecords(): IKamoku[] {
        return [
            {
                kamokuName: "事業主借",
                kasikariType: "貸方"
            }, {
                kamokuName: "普通預金",
                kasikariType: "貸方"
            }, {
                kamokuName: "売上",
                kasikariType: "貸方"
            },
        ];
    }
}
