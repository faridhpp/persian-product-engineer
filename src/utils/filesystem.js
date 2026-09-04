import fs from 'node:fs';
import path from 'node:path';

export function exists(filePath) {
  return fs.existsSync(path.resolve(filePath));
}
