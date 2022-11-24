import { Matchtype } from './MatchData'

interface Analysis {
  run(matches: Matchtype[] ): string
}

interface OutputTarget {
  print(report: string): void
}

export class Summary {
  constructor(public analysis: Analysis, public outputTarget: OutputTarget) {}
}
