import { Matchtype } from '../MatchData'
import { Analysis } from '../Summary'
import { MatchResoult } from '../MatchResoult'

export class WinAnalysis implements Analysis {
  constructor(public team: string) {}
  
  run(matches: Matchtype[]): string {
    let wins = 0

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatchResoult.HomeWon) {
        wins++
      } else if (
        match[2] === this.team &&
        match[5] === MatchResoult.AwayWone
      ) {
        wins++
      }
    }
    return String(wins)
  }
}
