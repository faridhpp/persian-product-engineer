import { createFinding, Severity } from '../severity.js';

export function checkNextMetadata(content, file) {
  const findings = [];

  if (file.endsWith('.tsx') && !content.includes('metadata') && !content.includes('generateMetadata')) {
    findings.push(createFinding({
      rule: 'nextjs-metadata',
      severity: Severity.SUGGESTION,
      file,
      message: 'Consider adding Next.js metadata for SEO.'
    }));
  }

  return findings;
}
