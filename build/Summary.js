"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnalysis_1 = require("./analysis/WinAnalysis");
const HtmlReport_1 = require("./outputTargets/HtmlReport");
class Summary {
    constructor(analysis, outputTarget) {
        this.analysis = analysis;
        this.outputTarget = outputTarget;
    }
    static analysisAndBuildHtmlReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintResoults(matches) {
        const result = this.analysis.run(matches);
        this.outputTarget.print(result);
    }
}
exports.Summary = Summary;
