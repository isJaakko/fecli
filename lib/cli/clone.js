#!/usr/bin/env node

'use strict';

const program = require('commander');

program
    .command('clone') // fe init
    .description('输入git仓库地址')
    .alias('c') // 简写
    .action(() => {
      require('../cmd/clone')();
    });
