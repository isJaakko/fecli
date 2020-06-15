module.exports = {
  env: {
    es6: true,
    node: true
  },
  plugins: ['prettier'],
  extends: [
    'standard', //使用standard做代码规范
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error'
  }
};
