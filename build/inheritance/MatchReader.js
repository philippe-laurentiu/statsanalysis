"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(element) {
        return [
            (0, utils_1.dateStringToDate)(element[0]),
            element[1],
            element[2],
            parseInt(element[3]),
            parseInt(element[4]),
            element[5],
            element[6],
        ];
    }
}
exports.MatchReader = MatchReader;
