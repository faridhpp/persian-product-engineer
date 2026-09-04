#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const command = process.argv[2];

if (command === 'init') {
  const target = path.join(process.cwd(), '.agents', 'skills', 'persian-product-engineer');
  fs.mkdirSync(target, { recursive: true });
  fs.writeFileSync(path.join(target, 'README.md'), '# Persian Product Engineer\n\nInstalled skill.');
  console.log('Persian Product Engineer skill initialized.');
} else {
  console.log('Usage: persian-product-engineer init');
}
