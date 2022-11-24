"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResoult_1 = require("./MatchResoult");
const csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matchData) {
    if (match[1] === 'Man United' && match[5] === MatchResoult_1.MatchResoult.HomeWon) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResoult_1.MatchResoult.AwayWone) {
        manUnitedWins++;
    }
}
console.log(manUnitedWins);
