import { Application } from "Main";
import { ShiwakeRepositoryMock } from "./repository/ShiwakeRepositoryMock";
import { KamokuRepository } from "repository/KamokuRepository";

test("basic", () => {
    const app = new Application(
        new ShiwakeRepositoryMock(),
        new KamokuRepository(),
        { insertRecords: () => {} }
    );
    const soukanjo = app.calcSoukanjomotocho();
    console.log(soukanjo);
    expect(0).toBe(0);
});
