const { exec } = require('child_process');

const cleanGit = (projectName) => {
  // 删除 git 文件
  exec('cd ' + projectName + ' && rm -rf .git', (err, out) => {
    console.info(out, projectName + '创建完成');
    process.exit();
  });
};

const cloneRepo = (repository, cb) => {
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

    if (typeof cb === 'function') {
      cb();
    }

    cleanGit(projectName);
  });
};

module.exports = {
  cleanGit,
  cloneRepo
};
