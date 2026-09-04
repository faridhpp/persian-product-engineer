export function checkLocalization(content, filePath) {
  const issues = [];

  if (!content.match(/lang=["']fa|dir=["']rtl|direction:\s*rtl/)) {
    issues.push({
      file: filePath,
      type: 'localization',
      message: 'Persian projects should define fa language and RTL direction.'
    });
  }

  if (/Arial|Tahoma|sans-serif/.test(content)) {
    issues.push({
      file: filePath,
      type: 'typography',
      message: 'Generic fonts detected. Configure Persian font system.'
    });
  }

  return issues;
}
