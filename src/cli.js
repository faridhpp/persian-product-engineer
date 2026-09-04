#!/usr/bin/env node

import { audit } from './commands/audit.js';

const [, , command, argument] = process.argv;

switch (command) {
  case 'audit':
    audit(argument || '.');
    break;
  case 'info':
    console.log('Persian Product Engineer - AI audit framework for Persian RTL products');
    break;
  case 'init':
    console.log('Initialize Persian Product Engineer');
    break;
  case 'update':
    console.log('Update Persian Product Engineer');
    break;
  default:
    console.log('Usage: persian-product-engineer <command> [path]');
}
