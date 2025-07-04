#!/usr/bin/env node

import { program } from 'commander';
import { readFile } from './parsers.js';
import { genDiff } from './diff.js';

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

      const diffResult = genDiff(data1, data2);
      console.log(diffResult);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  });

program.parse();