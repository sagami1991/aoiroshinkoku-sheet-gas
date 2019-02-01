import { IShiwakeRepository } from "repository/ShiwakeRepository";
import { IShiwake } from "interface";

export class ShiwakeRepositoryMock implements IShiwakeRepository {
    constructor() {
    }

    public getRecords() {
        const shiwakeRecords: IShiwake[] = [
            {
                "date": new Date("2018/09/28"),
                "kariKamoku": "普通預金",
                "kariPrice": 2492435,
                "kashiKamoku": "事業主借",
                "kashiPrice": 2492435,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/09/29"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/01"),
                "kariKamoku": "売掛金",
                "kariPrice": 59535,
                "kashiKamoku": "売上",
                "kashiPrice": 59535,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/02"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1700,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/02"),
                "kariKamoku": "事業主貸",
                "kariPrice": 4390,
                "kashiKamoku": "普通預金",
                "kashiPrice": 4390,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/10"),
                "kariKamoku": "事業主貸",
                "kariPrice": 3000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 3000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/15"),
                "kariKamoku": "普通預金",
                "kariPrice": 12000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 12000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/22"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/23"),
                "kariKamoku": "事業主貸",
                "kariPrice": 19000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 19000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/25"),
                "kariKamoku": "事業主貸",
                "kariPrice": 19000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 19000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/25"),
                "kariKamoku": "地代家賃",
                "kariPrice": 9000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/24"),
                "kariKamoku": "水道光熱費",
                "kariPrice": 1628,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1628,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/28"),
                "kariKamoku": "事業主貸",
                "kariPrice": 19000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 19000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/29"),
                "kariKamoku": "事業主貸",
                "kariPrice": 25747,
                "kashiKamoku": "普通預金",
                "kashiPrice": 25747,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/29"),
                "kariKamoku": "事業主貸",
                "kariPrice": 62918,
                "kashiKamoku": "普通預金",
                "kashiPrice": 62918,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/10/31"),
                "kariKamoku": "普通預金",
                "kariPrice": 59535,
                "kashiKamoku": "売掛金",
                "kashiPrice": 59535,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/1"),
                "kariKamoku": "売掛金",
                "kariPrice": 601775,
                "kashiKamoku": "売上",
                "kashiPrice": 601775,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/12"),
                "kariKamoku": "事業主貸",
                "kariPrice": 3000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 3000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/20"),
                "kariKamoku": "事業主貸",
                "kariPrice": 200000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 200000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/1"),
                "kariKamoku": "通信費",
                "kariPrice": 1069,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1069,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/20"),
                "kariKamoku": "地代家賃",
                "kariPrice": 9000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/25"),
                "kariKamoku": "水道光熱費",
                "kariPrice": 1535,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1535,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/27"),
                "kariKamoku": "事業主貸",
                "kariPrice": 29738,
                "kashiKamoku": "普通預金",
                "kashiPrice": 29738,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/27"),
                "kariKamoku": "事業主貸",
                "kariPrice": 45355,
                "kashiKamoku": "普通預金",
                "kashiPrice": 45355,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/29"),
                "kariKamoku": "普通預金",
                "kariPrice": 146661,
                "kashiKamoku": "事業主借",
                "kashiPrice": 146661,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/11/30"),
                "kariKamoku": "普通預金",
                "kariPrice": 601775,
                "kashiKamoku": "売掛金",
                "kashiPrice": 601775,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/1"),
                "kariKamoku": "通信費",
                "kariPrice": 1069,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1069,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/1"),
                "kariKamoku": "消耗品費",
                "kariPrice": 666,
                "kashiKamoku": "事業主借",
                "kashiPrice": 666,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/1"),
                "kariKamoku": "売掛金",
                "kariPrice": 624645,
                "kashiKamoku": "売上",
                "kashiPrice": 624645,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/2"),
                "kariKamoku": "接待交際費",
                "kariPrice": 3914,
                "kashiKamoku": "事業主借",
                "kashiPrice": 3914,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/2"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 288,
                "kashiKamoku": "事業主借",
                "kashiPrice": 288,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/4"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/4"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 288,
                "kashiKamoku": "事業主借",
                "kashiPrice": 288,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/8"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1140,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1140,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/9"),
                "kariKamoku": "接待交際費",
                "kariPrice": 2000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 2000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/9"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1273,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1273,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/9"),
                "kariKamoku": "接待交際費",
                "kariPrice": 4000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 4000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/10"),
                "kariKamoku": "事業主貸",
                "kariPrice": 3000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 3000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/10"),
                "kariKamoku": "普通預金",
                "kariPrice": 94825,
                "kashiKamoku": "事業主借",
                "kashiPrice": 94825,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/11"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 992,
                "kashiKamoku": "事業主借",
                "kashiPrice": 992,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/11"),
                "kariKamoku": "接待交際費",
                "kariPrice": 3000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 3000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/13"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1925,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1925,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/13"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1166,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1166,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/14"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1166,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1166,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/14"),
                "kariKamoku": "接待交際費",
                "kariPrice": 8044,
                "kashiKamoku": "事業主借",
                "kashiPrice": 8044,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/19"),
                "kariKamoku": "事業主貸",
                "kariPrice": 19000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 19000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/19"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/19"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/19"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/19"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/21"),
                "kariKamoku": "接待交際費",
                "kariPrice": 4500,
                "kashiKamoku": "事業主借",
                "kashiPrice": 4500,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/21"),
                "kariKamoku": "接待交際費",
                "kariPrice": 700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 700,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/21"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1700,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/21"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/21"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1700,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/21"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1700,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/22"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1450,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1450,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/21"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1047,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1047,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/21"),
                "kariKamoku": "事業主貸",
                "kariPrice": 29000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 29000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/25"),
                "kariKamoku": "地代家賃",
                "kariPrice": 18000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 18000,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/25"),
                "kariKamoku": "水道光熱費",
                "kariPrice": 2190,
                "kashiKamoku": "事業主借",
                "kashiPrice": 2190,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/27"),
                "kariKamoku": "事業主貸",
                "kariPrice": 30738,
                "kashiKamoku": "普通預金",
                "kashiPrice": 30738,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/27"),
                "kariKamoku": "事業主貸",
                "kariPrice": 142419,
                "kashiKamoku": "普通預金",
                "kashiPrice": 142419,
                "summary": "てすと文章"
            },
            {
                "date": new Date("2018/12/28"),
                "kariKamoku": "普通預金",
                "kariPrice": 624645,
                "kashiKamoku": "売掛金",
                "kashiPrice": 624645,
                "summary": "てすと文章"
            }
        ];
        return shiwakeRecords;
    }
}
