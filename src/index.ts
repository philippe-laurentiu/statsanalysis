import { MatchReader } from './MatchReader'
import { Summary } from './Summary'

const matchReader = MatchReader.matchreaderLoad('football.csv')
matchReader.load()

const summary = Summary.analysisAndBuildHtmlReport('Man United')

summary.buildAndPrintResoults(matchReader.matchData)

//tete