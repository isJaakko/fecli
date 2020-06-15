#!/usr/bin/env node

'use strict';

const program = require('commander');

program
  .command('concurrency') // fe init
  .description('初始化项目')
  .alias('cc') // 简写
  .action(() => {
    require('../cmd/concurrency')();
  });
