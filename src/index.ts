import { MatchReader } from './MatchReader'
import { dateStringToDate } from './utils'
import { MatchResoult } from './MatchResoult'
import { Matchtype } from './CsvFileReader'

const test = dateStringToDate('10/08/2018')
console.log(test)

const reader = new MatchReader('football.csv')
reader.readFile()

let manUnitedWins = 0

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResoult.HomeWon) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResoult.AwayWone) {
    manUnitedWins++
  }
}
console.log(reader.data[1])
console.log(manUnitedWins)
