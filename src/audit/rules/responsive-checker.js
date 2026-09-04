import { createFinding, Severity } from '../severity.js';

export function checkResponsive(content, file) {
  const findings = [];

  if (file.endsWith('.css') && !content.includes('@media')) {
    findings.push(createFinding({
      rule: 'responsive-layout',
      severity: Severity.SUGGESTION,
      file,
      message: 'Consider responsive breakpoints with media queries.'
    }));
  }

  return findings;
}
