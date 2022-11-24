import { CsvFileReader } from './CsvFileReader'
import { Matchtype } from './CsvFileReader'
import { MatchResoult } from './MatchResoult'
import { dateStringToDate } from './utils'

export class MatchReader extends CsvFileReader<Matchtype> {
  mapRow(element: string[]): Matchtype {
    return [
      dateStringToDate(element[0]),
      element[1],
      element[2],
      parseInt(element[3]),
      parseInt(element[4]),
      element[5] as MatchResoult,
      element[6],
    ]
  }
}
