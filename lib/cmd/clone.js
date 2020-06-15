'use strict';
// 操作命令行
const { exec } = require('child_process');
const co = require('co');
const ora = require('ora');
const prompt = require('co-prompt');
const { reactRepo } = require('../../const/repo');

const spinner = ora('正在生成...');

const cleanGit = (projectName) => {
  // 删除 git 文件
  exec('cd ' + projectName + ' && rm -rf .git', (err, out) => {
    spinner.stop();
    console.info(out, projectName + '创建完成');
    process.exit();
  });
};

const cloneProject = (cb) => {
  const repository = reactRepo;
  const projectName = repository
    .split('/')
    .slice(-1)[0]
    .replace(/(\.git)$/, '');
  // git命令，远程拉取项目并自定义项目名
  const cmdStr = `git clone ${repository}`;

  exec(cmdStr, (err, stdout) => {
    if (err) {
      console.log(err);
      process.exit();
    }

    cleanGit(projectName);
    cb();
  });
};

module.exports = () => {
  co(function* () {
    // 处理用户输入
    const repository = yield prompt('项目地址: ');

    return new Promise((resolve, reject) => {
      resolve(repository);
    });
  }).then(cloneProject);
};
