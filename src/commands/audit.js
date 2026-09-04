import { scanProject } from '../audit/project-scanner.js';
import { runRules } from '../audit/rules-engine.js';
import { generateReport } from '../audit/report-generator.js';

export function audit(target = '.') {
  const files = scanProject(target);
  const issues = files.flatMap((file) => runRules(file));

  const report = generateReport(issues);
  console.log(report);

  return { files, issues };
}
