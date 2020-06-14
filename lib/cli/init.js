#!/usr/bin/env node

'use strict';

const program = require('commander');

program
    .command('init') // fe init
    .description('初始化项目')
    .alias('i') // 简写
    .action(() => {
      require('../cmd/init')();
    });
