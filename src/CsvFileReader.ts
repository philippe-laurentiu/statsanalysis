import fs from 'fs'
import { MatchResoult } from './MatchResoult'

export type Matchtype = [Date, string, string, number, number, MatchResoult, string]

export abstract class CsvFileReader<T> {
  data: T[] = []

  abstract mapRow(row: string[]): T

  constructor(public fileName: string) {}

  readFile(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf8',
      })
      .split('\n')
      .map((row): string[] => row.split(','))
      .map(this.mapRow)
  }
}
