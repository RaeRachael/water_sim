"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cell = void 0;
var cell = /** @class */ (function () {
    function cell(position, heights) {
        this.position = position;
        this.cell_heights = heights;
        this.water_composition = { soil: 0, rock: 0 };
    }
    return cell;
}());
exports.cell = cell;
