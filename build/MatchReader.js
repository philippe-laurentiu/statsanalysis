"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
const CsvFileReader_1 = require("./CsvFileReader");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matchData = [];
    }
    static matchreaderLoad(filename) {
        return new MatchReader(new CsvFileReader_1.CsvFileReader(filename));
    }
    load() {
        this.reader.read();
        this.matchData = this.reader.data.map((element) => {
            return [
                (0, utils_1.dateStringToDate)(element[0]),
                element[1],
                element[2],
                parseInt(element[3]),
                parseInt(element[4]),
                element[5],
                element[6],
            ];
        });
    }
}
exports.MatchReader = MatchReader;
