import { Calculator } from "Main";
import { ShiwakeRepositoryMock } from "./repository/ShiwakeRepositoryMock";
import { KamokuRepository } from "repository/KamokuRepository";

test("basic", () => {
    const app = new Calculator(
        new ShiwakeRepositoryMock(),
        new KamokuRepository(),
        { insertRecords: () => {} }
    );
    const soukanjoRecords = app.calcSoukanjomotocho();
    soukanjoRecords.forEach(soukanjo => {
        console.log(soukanjo);
    });
    expect(0).toBe(0);
});

// test("basic2", () => {
//     const shiwakeRepositoryMock = new ShiwakeRepositoryMock();
//     const app = new Calculator(
//         new ShiwakeRepositoryMock(),
//         new KamokuRepository(),
//         { insertRecords: () => {} }
//     );
//     const shiwakeRecords = shiwakeRepositoryMock.getRecords();
//     const kamoku: { [key: string]: true} = {};
//     shiwakeRecords.forEach(shiwake => {
//         kamoku[shiwake.kariKamoku] = true;
//         kamoku[shiwake.kashiKamoku] = true;
//     });

//     console.log(Object.keys(kamoku));
//     expect(0).toBe(0);
// });