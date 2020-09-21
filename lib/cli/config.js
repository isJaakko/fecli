#!/usr/bin/env node

'use strict';

const program = require('commander');

program
  .command('init')
  .description('初始化项目')
  .alias('i')
  .action(() => {
    require('../cmd/init')();
  });
