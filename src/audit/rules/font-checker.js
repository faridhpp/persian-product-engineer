import { createFinding, Severity } from '../severity.js';

export function checkFonts(content, file) {
  const findings = [];

  if (/font-family:\s*(Arial|Tahoma|sans-serif)/i.test(content)) {
    findings.push(createFinding({
      rule: 'persian-font',
      severity: Severity.WARNING,
      file,
      message: 'Use Persian optimized fonts such as Dana or Vazirmatn.'
    }));
  }

  return findings;
}
