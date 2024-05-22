#!/usr/bin/env node
import { program } from 'commander';

import dif from '../src/dif.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.1.0')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const options = program.opts();
    const result = dif(filepath1, filepath2, options.format);
    console.log(result);
  });

program.parse();