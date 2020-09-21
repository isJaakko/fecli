#!/usr/bin/env node

'use strict';

// https://www.npmjs.com/package/commander
const program = require('commander');
const packageInfo = require('../../package.json');

// 命令
// clone
require('./clone');
// init
require('./init');
// user
require('./user');
// concurrency
require('./concurrency');

program.version(packageInfo.version);

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
