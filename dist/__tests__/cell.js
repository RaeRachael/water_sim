"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cell_1 = require("../src/cell");
describe("cell class", function () {
    it("should be creatable", function () {
        expect(new cell_1.cell({ x: 1, y: 1 }, { rock_height: 0, soil_height: 0, water_height: 10 })).toBeInstanceOf(cell_1.cell);
    });
});
