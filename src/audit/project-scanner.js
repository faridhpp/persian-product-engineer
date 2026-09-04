import fs from 'node:fs';
import path from 'node:path';

const extensions = new Set(['.js', '.jsx', '.ts', '.tsx', '.css', '.html']);

export function scanProject(target) {
  const files = [];

  function walk(dir) {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      const stat = fs.statSync(full);

      if (stat.isDirectory() && !['node_modules', '.git', '.next', 'dist'].includes(item)) {
        walk(full);
      }

      if (stat.isFile() && extensions.has(path.extname(full))) {
        files.push(full);
      }
    }
  }

  walk(path.resolve(target));
  return files;
}
