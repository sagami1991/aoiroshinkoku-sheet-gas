import { IShiwakeRepository as IShiwakeSheet } from "sheet/ShiwakeSheet";
import { IShiwake } from "interface";

export class ShiwakeSheetMock implements IShiwakeSheet {
    constructor() {
    }

    public getRecords() {
        const shiwakeRecords: IShiwake[] = [
            {
                "date": new Date("2018-09-27T15:00:00.000Z"),
                "kariKamoku": "普通預金",
                "kariPrice": 2492435,
                "kashiKamoku": "事業主借",
                "kashiPrice": 2492435,
                "summary": "てすと文章",
                "id": 0
            },
            {
                "date": new Date("2018-09-28T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 1
            },
            {
                "date": new Date("2018-09-30T15:00:00.000Z"),
                "kariKamoku": "売掛金",
                "kariPrice": 59535,
                "kashiKamoku": "売上",
                "kashiPrice": 59535,
                "summary": "てすと文章",
                "id": 2
            },
            {
                "date": new Date("2018-10-01T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1700,
                "summary": "てすと文章",
                "id": 3
            },
            {
                "date": new Date("2018-10-01T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 4390,
                "kashiKamoku": "普通預金",
                "kashiPrice": 4390,
                "summary": "てすと文章",
                "id": 4
            },
            {
                "date": new Date("2018-10-09T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 3000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 3000,
                "summary": "てすと文章",
                "id": 5
            },
            {
                "date": new Date("2018-10-14T15:00:00.000Z"),
                "kariKamoku": "普通預金",
                "kariPrice": 12000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 12000,
                "summary": "てすと文章",
                "id": 6
            },
            {
                "date": new Date("2018-10-21T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 7
            },
            {
                "date": new Date("2018-10-22T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 19000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 19000,
                "summary": "てすと文章",
                "id": 8
            },
            {
                "date": new Date("2018-10-24T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 19000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 19000,
                "summary": "てすと文章",
                "id": 9
            },
            {
                "date": new Date("2018-10-24T15:00:00.000Z"),
                "kariKamoku": "地代家賃",
                "kariPrice": 18000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 10
            },
            {
                "date": new Date("2018-10-23T15:00:00.000Z"),
                "kariKamoku": "水道光熱費",
                "kariPrice": 1628,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1628,
                "summary": "てすと文章",
                "id": 11
            },
            {
                "date": new Date("2018-10-27T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 19000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 19000,
                "summary": "てすと文章",
                "id": 12
            },
            {
                "date": new Date("2018-10-28T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 25747,
                "kashiKamoku": "普通預金",
                "kashiPrice": 25747,
                "summary": "てすと文章",
                "id": 13
            },
            {
                "date": new Date("2018-10-28T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 62918,
                "kashiKamoku": "普通預金",
                "kashiPrice": 62918,
                "summary": "てすと文章",
                "id": 14
            },
            {
                "date": new Date("2018-10-30T15:00:00.000Z"),
                "kariKamoku": "普通預金",
                "kariPrice": 59535,
                "kashiKamoku": "売掛金",
                "kashiPrice": 59535,
                "summary": "てすと文章",
                "id": 15
            },
            {
                "date": new Date("2018-10-31T15:00:00.000Z"),
                "kariKamoku": "売掛金",
                "kariPrice": 601775,
                "kashiKamoku": "売上",
                "kashiPrice": 601775,
                "summary": "てすと文章",
                "id": 16
            },
            {
                "date": new Date("2018-11-11T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 3000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 3000,
                "summary": "てすと文章",
                "id": 17
            },
            {
                "date": new Date("2018-11-19T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 200000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 200000,
                "summary": "てすと文章",
                "id": 18
            },
            {
                "date": new Date("2018-10-31T15:00:00.000Z"),
                "kariKamoku": "通信費",
                "kariPrice": 1069,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1069,
                "summary": "てすと文章",
                "id": 19
            },
            {
                "date": new Date("2018-11-19T15:00:00.000Z"),
                "kariKamoku": "地代家賃",
                "kariPrice": 18000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 20
            },
            {
                "date": new Date("2018-11-24T15:00:00.000Z"),
                "kariKamoku": "水道光熱費",
                "kariPrice": 1535,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1535,
                "summary": "てすと文章",
                "id": 21
            },
            {
                "date": new Date("2018-11-26T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 29738,
                "kashiKamoku": "普通預金",
                "kashiPrice": 29738,
                "summary": "てすと文章",
                "id": 22
            },
            {
                "date": new Date("2018-11-26T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 45355,
                "kashiKamoku": "普通預金",
                "kashiPrice": 45355,
                "summary": "てすと文章",
                "id": 23
            },
            {
                "date": new Date("2018-11-28T15:00:00.000Z"),
                "kariKamoku": "普通預金",
                "kariPrice": 146661,
                "kashiKamoku": "事業主借",
                "kashiPrice": 146661,
                "summary": "てすと文章",
                "id": 24
            },
            {
                "date": new Date("2018-11-29T15:00:00.000Z"),
                "kariKamoku": "普通預金",
                "kariPrice": 601775,
                "kashiKamoku": "売掛金",
                "kashiPrice": 601775,
                "summary": "てすと文章",
                "id": 25
            },
            {
                "date": new Date("2018-11-30T15:00:00.000Z"),
                "kariKamoku": "通信費",
                "kariPrice": 1069,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1069,
                "summary": "てすと文章",
                "id": 26
            },
            {
                "date": new Date("2018-11-30T15:00:00.000Z"),
                "kariKamoku": "消耗品費",
                "kariPrice": 666,
                "kashiKamoku": "事業主借",
                "kashiPrice": 666,
                "summary": "てすと文章",
                "id": 27
            },
            {
                "date": new Date("2018-11-30T15:00:00.000Z"),
                "kariKamoku": "売掛金",
                "kariPrice": 624645,
                "kashiKamoku": "売上",
                "kashiPrice": 624645,
                "summary": "てすと文章",
                "id": 28
            },
            {
                "date": new Date("2018-12-01T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 3914,
                "kashiKamoku": "事業主借",
                "kashiPrice": 3914,
                "summary": "てすと文章",
                "id": 29
            },
            {
                "date": new Date("2018-12-01T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 288,
                "kashiKamoku": "事業主借",
                "kashiPrice": 288,
                "summary": "てすと文章",
                "id": 30
            },
            {
                "date": new Date("2018-12-03T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1000,
                "summary": "てすと文章",
                "id": 31
            },
            {
                "date": new Date("2018-12-03T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 288,
                "kashiKamoku": "事業主借",
                "kashiPrice": 288,
                "summary": "てすと文章",
                "id": 32
            },
            {
                "date": new Date("2018-12-07T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1140,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1140,
                "summary": "てすと文章",
                "id": 33
            },
            {
                "date": new Date("2018-12-08T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 2000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 2000,
                "summary": "てすと文章",
                "id": 34
            },
            {
                "date": new Date("2018-12-08T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1273,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1273,
                "summary": "てすと文章",
                "id": 35
            },
            {
                "date": new Date("2018-12-08T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 4000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 4000,
                "summary": "てすと文章",
                "id": 36
            },
            {
                "date": new Date("2018-12-09T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 3000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 3000,
                "summary": "てすと文章",
                "id": 37
            },
            {
                "date": new Date("2018-12-09T15:00:00.000Z"),
                "kariKamoku": "普通預金",
                "kariPrice": 94825,
                "kashiKamoku": "事業主借",
                "kashiPrice": 94825,
                "summary": "てすと文章",
                "id": 38
            },
            {
                "date": new Date("2018-12-10T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 992,
                "kashiKamoku": "事業主借",
                "kashiPrice": 992,
                "summary": "てすと文章",
                "id": 39
            },
            {
                "date": new Date("2018-12-10T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 3000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 3000,
                "summary": "てすと文章",
                "id": 40
            },
            {
                "date": new Date("2018-12-12T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1925,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1925,
                "summary": "てすと文章",
                "id": 41
            },
            {
                "date": new Date("2018-12-12T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1166,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1166,
                "summary": "てすと文章",
                "id": 42
            },
            {
                "date": new Date("2018-12-13T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1166,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1166,
                "summary": "てすと文章",
                "id": 43
            },
            {
                "date": new Date("2018-12-13T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 8044,
                "kashiKamoku": "事業主借",
                "kashiPrice": 8044,
                "summary": "てすと文章",
                "id": 44
            },
            {
                "date": new Date("2018-12-18T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 19000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 19000,
                "summary": "てすと文章",
                "id": 45
            },
            {
                "date": new Date("2018-12-18T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 46
            },
            {
                "date": new Date("2018-12-18T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 47
            },
            {
                "date": new Date("2018-12-18T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 48
            },
            {
                "date": new Date("2018-12-18T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 18000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 49
            },
            {
                "date": new Date("2018-12-20T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 4500,
                "kashiKamoku": "事業主借",
                "kashiPrice": 4500,
                "summary": "てすと文章",
                "id": 50
            },
            {
                "date": new Date("2018-12-20T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 700,
                "summary": "てすと文章",
                "id": 51
            },
            {
                "date": new Date("2018-12-20T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1700,
                "summary": "てすと文章",
                "id": 52
            },
            {
                "date": new Date("2018-12-20T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1000,
                "summary": "てすと文章",
                "id": 53
            },
            {
                "date": new Date("2018-12-20T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1700,
                "summary": "てすと文章",
                "id": 54
            },
            {
                "date": new Date("2018-12-20T15:00:00.000Z"),
                "kariKamoku": "接待交際費",
                "kariPrice": 1700,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1700,
                "summary": "てすと文章",
                "id": 55
            },
            {
                "date": new Date("2018-12-21T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1450,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1450,
                "summary": "てすと文章",
                "id": 56
            },
            {
                "date": new Date("2018-12-20T15:00:00.000Z"),
                "kariKamoku": "旅費交通費",
                "kariPrice": 1047,
                "kashiKamoku": "事業主借",
                "kashiPrice": 1047,
                "summary": "てすと文章",
                "id": 57
            },
            {
                "date": new Date("2018-12-20T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 29000,
                "kashiKamoku": "普通預金",
                "kashiPrice": 29000,
                "summary": "てすと文章",
                "id": 58
            },
            {
                "date": new Date("2018-12-24T15:00:00.000Z"),
                "kariKamoku": "地代家賃",
                "kariPrice": 18000,
                "kashiKamoku": "事業主借",
                "kashiPrice": 18000,
                "summary": "てすと文章",
                "id": 59
            },
            {
                "date": new Date("2018-12-24T15:00:00.000Z"),
                "kariKamoku": "水道光熱費",
                "kariPrice": 2190,
                "kashiKamoku": "事業主借",
                "kashiPrice": 2190,
                "summary": "てすと文章",
                "id": 60
            },
            {
                "date": new Date("2018-12-26T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 30738,
                "kashiKamoku": "普通預金",
                "kashiPrice": 30738,
                "summary": "てすと文章",
                "id": 61
            },
            {
                "date": new Date("2018-12-26T15:00:00.000Z"),
                "kariKamoku": "事業主貸",
                "kariPrice": 142419,
                "kashiKamoku": "普通預金",
                "kashiPrice": 142419,
                "summary": "てすと文章",
                "id": 62
            },
            {
                "date": new Date("2018-12-27T15:00:00.000Z"),
                "kariKamoku": "普通預金",
                "kariPrice": 624645,
                "kashiKamoku": "売掛金",
                "kashiPrice": 624645,
                "summary": "てすと文章",
                "id": 63
            }
        ];
        return shiwakeRecords;
    }
}
