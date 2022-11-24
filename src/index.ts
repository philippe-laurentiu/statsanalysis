import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { dateStringToDate } from './utils'
import { MatchResoult } from './MatchResoult'


const csvFileReader = new CsvFileReader("football.csv")
const matchReader = new MatchReader(csvFileReader)
matchReader.load()



let manUnitedWins = 0

for (let match of matchReader.matchData) {
  if (match[1] === 'Man United' && match[5] === MatchResoult.HomeWon) {
    manUnitedWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResoult.AwayWone) {
    manUnitedWins++
  }
}
console.log(manUnitedWins)
