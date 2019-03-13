import { ChoboCalculator } from "main";
import { ShiwakeSheetMock } from "./sheet/shiwakeSheetMock";
import { KamokuSheet } from "sheet/KamokuSheet";

const testCalculator = new ChoboCalculator(
    new ShiwakeSheetMock(),
    new KamokuSheet()
);
test("総勘定元帳テスト", () => {
    const soukanjoRecords = testCalculator.calcSoukanjomotocho();
    expect(0).toBe(0);
});

test("試算表テスト", () => {
    const soukanjoRecords = testCalculator.calcSoukanjomotocho();
    const shisanRecords = testCalculator.calcShisan(soukanjoRecords);
    console.log(shisanRecords);
    expect(0).toBe(0);
});
