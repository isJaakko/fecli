'use strict';
// 操作命令行
const { exec } = require('child_process');
const { promisify } = require('util');
const ora = require('ora');
// https://github.com/SBoudrias/Inquirer.js/
const inquirer = require('inquirer');
const { cloneRepo } = require('../../utils/clone');
const { username, useremail } = require('../../const/user');

const spinner = ora('开始设置...');

// 修改git仓库用户信息
// 输入git user.name user.email
// 然后调命令 git config user.name/email ""
const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: `请输入github用户名(default: ${username})`
    },
    {
      type: 'input',
      name: 'email',
      message: `请输入github邮箱(default: ${useremail})`
    }
  ]);
};

const answers = async (answer) => {
  const { name, email } = answer;
  spinner.start();

  await Promise.all([
      promisify(exec)(`git config user.name ${name || username}`),
      promisify(exec)(`git config user.email ${email || useremail}`)
  ]).catch((err) => {
      console.err(err);
  });

  spinner.stop('完成设置');
};

module.exports = () => {
  questions().then(answers);
};
