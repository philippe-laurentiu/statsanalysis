import { WinAnalysis } from './analysis/WinAnalysis'
import { Matchtype } from './MatchData'
import { HtmlReport } from './outputTargets/HtmlReport'

export interface Analysis {
  run(matches: Matchtype[] ): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {

  static analysisAndBuildHtmlReport(team: string): Summary {
    return new Summary(
      new WinAnalysis(team),
      new HtmlReport()
    )
  }
  
  constructor(public analysis: Analysis, public outputTarget: OutputTarget) {}
  
  buildAndPrintResoults (matches: Matchtype[]) {
    const result = this.analysis.run(matches)
    this.outputTarget.print(result)
  }
}
