import { existsSync } from 'node:fs';

const required = [
  'SKILL.md',
  'README.md',
  'manifest.json',
  'rules',
  'patterns',
  'prompts',
  'design-system'
];

const missing = required.filter((item) => !existsSync(item));

if (missing.length) {
  console.error('Missing required paths:', missing.join(', '));
  process.exit(1);
}

console.log('Skill structure is valid.');
