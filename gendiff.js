#!/usr/bin/env node

import { program } from 'commander';
import { readFile } from './parsers.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    try {
      const data1 = readFile(filepath1);
      const data2 = readFile(filepath2);

      console.log('Data from first file:', data1);
      console.log('Data from second file:', data2);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  });

program.parse();