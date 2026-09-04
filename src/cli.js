#!/usr/bin/env node

const command = process.argv[2] || 'info';

const commands = {
  init: 'Initialize Persian Product Engineer in current project',
  audit: 'Run project quality audit',
  update: 'Update skill files',
  info: 'Show skill information'
};

console.log(commands[command] || commands.info);
