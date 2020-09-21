'use strict';
// 操作命令行
const { exec } = require('child_process');
const co = require('co');
const ora = require('ora');
const prompt = require('co-prompt');
const inquirer = require('inquirer');
const axios = require('axios');
const { tsReactRepo } = require('../../const/repo');
const { cloneRepo } = require('../../utils/clone');

const spinner = ora('正在生成...');

const questions = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: '选择要生成的模版类型',
      choices: ['react', 'koa']
    },
    {
      type: 'list',
      name: 'language',
      message: '选择要使用的语言',
      choices: ['JavaScript', 'TypeScript']
    }
  ]);
};

module.exports = () => {
  questions().then((answers) => {
    const { template, language } = answers;
    cloneRepo(tsReactRepo);
  });
};
