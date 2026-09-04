import { createFinding, Severity } from '../severity.js';

export function checkAccessibility(content, file) {
  const findings = [];

  if (file.endsWith('.tsx') && content.includes('<img') && !content.includes('alt=')) {
    findings.push(createFinding({
      rule: 'accessibility-image-alt',
      severity: Severity.WARNING,
      file,
      message: 'Images should include alt text.'
    }));
  }

  return findings;
}
