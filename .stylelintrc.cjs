// @see https://stylelink.bootcss.com

module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint扩展插件
    'stylelint-config-html/vue', // 配置vue中template样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置vue中scss样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /* 
  null => 关闭该规则
  always => 必须
  */
  rules: {
    'value-keyword-case': null, // 在css中使用v-bind,不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止URL的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 关闭未知的属性(true为不允许)
    'block-opening-brace-space-before': 'always', // 大括号之前必须有一个空格或不能有空白字符
    'value-no-vendor-prefix': null, // 关闭属性值前缀 --webkit-box
    'property-no-vender-prefix': null, // 关闭属性前缀 --webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式集的时候能使用到
      },
    ],
  },
}
