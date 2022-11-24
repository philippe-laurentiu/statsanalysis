"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const utils_1 = require("./utils");
const MatchResoult_1 = require("./MatchResoult");
const test = (0, utils_1.dateStringToDate)('10/08/2018');
console.log(test);
const reader = new MatchReader_1.MatchReader('football.csv');
reader.readFile();
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === MatchResoult_1.MatchResoult.HomeWon) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResoult_1.MatchResoult.AwayWone) {
        manUnitedWins++;
    }
}
console.log(reader.data[1]);
console.log(manUnitedWins);
