import fs from 'node:fs';

export function runRules(file) {
  const content = fs.readFileSync(file, 'utf8');
  const issues = [];

  const rules = [
    { pattern: /margin-left|margin-right|padding-left|padding-right/g, type: 'rtl' },
    { pattern: /font-family:\s*(Arial|Tahoma|sans-serif)/gi, type: 'typography' },
    { pattern: /dir=['"]ltr['"]/gi, type: 'localization' }
  ];

  for (const rule of rules) {
    if (rule.pattern.test(content)) {
      issues.push({ file, category: rule.type });
    }
  }

  return issues;
}
