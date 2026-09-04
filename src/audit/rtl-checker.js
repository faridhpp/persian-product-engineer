export function checkRTL(content, filePath) {
  const issues = [];

  const patterns = [
    { regex: /text-align:\s*(left|right)/g, message: 'Use logical text alignment for RTL layouts.' },
    { regex: /margin-(left|right)|padding-(left|right)/g, message: 'Avoid physical left/right spacing in RTL projects.' },
    { regex: /direction:\s*ltr/g, message: 'LTR direction found in Persian interface.' }
  ];

  for (const rule of patterns) {
    if (rule.regex.test(content)) {
      issues.push({ file: filePath, type: 'rtl', message: rule.message });
    }
  }

  return issues;
}
