"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinAnalysis = void 0;
const MatchResoult_1 = require("../MatchResoult");
class WinAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === this.team && match[5] === MatchResoult_1.MatchResoult.HomeWon) {
                wins++;
            }
            else if (match[2] === this.team &&
                match[5] === MatchResoult_1.MatchResoult.AwayWone) {
                wins++;
            }
        }
        return String(wins);
    }
}
exports.WinAnalysis = WinAnalysis;
