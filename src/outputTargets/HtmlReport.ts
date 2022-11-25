import { OutputTarget } from '../Summary'
import fs from 'fs'

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const htmlReport = `
      <div>
        <p>${report}</p>
      </div>
    `
    fs.writeFileSync('./report.html', htmlReport)
  }
}
