"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matchData = [];
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
