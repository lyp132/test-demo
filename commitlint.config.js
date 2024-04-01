module.exports = {
  // 继承的规则
  extends: ['@commitlint/config-conventional'],
  rules: {
    // type 类型定义，表示 git 提交的 type 必须在以下类型范围内。接受三个参数
    'type-enum': [
      // 当前验证的错误级别
      2,
      // 在什么情况下进行验证，always表示一直进行验证
      'always',
      // 泛型里面的内容跟 `.cz-config.js` 中 type 里相同
      [
        'feat', // 新功能 feature
        'fix', // 修复 bug
        'docs', // 文档注释
        'style', // 代码格式(不影响代码运行的变动)
        'refactor', // 重构(既不增加新功能，也不是修复bug)
        'perf', // 性能优化
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动
        'revert', // 回退
        'build' // 打包
      ]
    ],
    // subject 大小写不做校验
    'subject-case': [0]
  }
}