import { MatchResoult } from './MatchResoult'
import { dateStringToDate } from './utils'

export type Matchtype = [
  Date,
  string,
  string,
  number,
  number,
  MatchResoult,
  string
]

interface DataReader {
  data: string[][]
  read(): void
}

export class MatchReader {
  matchData: Matchtype[] = []

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read()
    this.matchData = this.reader.data.map((element) => {
      return [
        dateStringToDate(element[0]),
        element[1],
        element[2],
        parseInt(element[3]),
        parseInt(element[4]),
        element[5] as MatchResoult,
        element[6],
      ]
    })
  }
}
