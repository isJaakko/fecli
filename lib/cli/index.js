#!/usr/bin/env node

'use strict';

// https://www.npmjs.com/package/commander
const program = require('commander');
const packageInfo = require('../../package.json');


program
    .version(packageInfo.version)

program
    .command('init') // fe init
    .description('生成一个项目')
    .alias('i') // 简写
    .action(() => {
      require('../cmd/init')();
    });

program
    .command('clone') // fe init
    .description('生成一个项目')
    .alias('cl') // 简写
    .action(() => {
      require('../cmd/clone')();
    });

program.parse(process.argv);

if(!program.args.length){
  program.help()
}