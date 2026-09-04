export function generateMarkdownReport(results) {
  let output = '# Persian Product Engineer Audit Report\n\n';

  if (!results.length) {
    return output + 'No issues detected. ✅';
  }

  output += `Found ${results.length} issue(s).\n\n`;

  for (const item of results) {
    output += `## ${item.type}\n`;
    output += `- File: ${item.file}\n`;
    output += `- ${item.message}\n\n`;
  }

  return output;
}
