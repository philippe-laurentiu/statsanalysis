"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (str) => {
    const da = str.split('/').map((ds) => parseInt(ds));
    return new Date(da[2], da[1] - 1, da[0]);
};
exports.dateStringToDate = dateStringToDate;
