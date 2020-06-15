'use strict';
// 操作命令行
const { exec } = require('child_process');
const co = require('co');
const ora = require('ora');
const prompt = require('co-prompt');
const inquirer = require('inquirer');
const axios = require('axios');
const { reactRepo, koaRepo } = require('../../const/repo');
const { cloneRepo } = require('../../utils/clone');

const spinner = ora('正在生成...');

const questions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: '选择要生成的模版类型',
      choices: ['react', 'koa']
    }
  ]);
};

module.exports = () => {
  questions().then(answers);
};