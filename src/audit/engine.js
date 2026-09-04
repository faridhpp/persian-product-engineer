import fs from 'node:fs';
import path from 'node:path';
import { checkRTL } from './rtl-checker.js';
import { checkLocalization } from './localization-checker.js';

export function scanProject(projectPath) {
  const results = [];

  function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (/\.(tsx?|jsx?|css|html)$/.test(full)) {
        const content = fs.readFileSync(full, 'utf8');
        results.push(...checkRTL(content, full));
        results.push(...checkLocalization(content, full));
      }
    }
  }

  walk(projectPath);
  return results;
}
