#!usr/bin/env node

const program = require('commander');

program
  .command('user')
  .description('修改git仓库配置')
  .alias('u')
  .action(() => {
    require('../cmd/user')();
  });
