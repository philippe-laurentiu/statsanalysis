import fs from 'fs'

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
