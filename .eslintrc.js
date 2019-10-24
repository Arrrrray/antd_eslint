module.exports = {
  // 运行环境
  'env': {
    'browser': true,
    'es6': true
  },
  // 启用推荐的规则，报告一些常见的问题
  'extends': 'eslint:recommended',
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  // 解析选项
  'parserOptions': {
    // ECM特性
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  // 插件
  'plugins': [
    'react'
  ],
  // 规则
  'rules': {
    // 缩进
    'indent': ['error', 2],
    // 强制使用一致的换行风格
    'linebreak-style': ['error', 'unix'],
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
    // 要求或禁止使用分号代替 ASI
    'semi': ['error', 'always'],
    // 强制分号之前和之后使用一致的空格
    'semi-spacing': 'error',
    // 要求使用 === 和 !==
    'eqeqeq': ['warn', 'smart'],
    // 强制数组方括号中使用一致的空格
    'array-bracket-spacing': ['error', 'always'],
    // 强制在代码块中使用一致的大括号风格
    'brace-style': ['error', '1tbs', { 'allowSingleLine': true }],
    // 强制使用骆驼拼写法命名约定
    'camelcase': 'error',
    // 要求或禁止末尾逗号
    'comma-dangle': ['error', 'only-multiline'],
    // 强制在逗号前后使用一致的空格
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    // 强制使用一致的逗号风格
    'comma-style': ['error', 'last'],
    // 强制在计算的属性的方括号中使用一致的空格
    'computed-property-spacing': ['error', 'never'],
    // 当获取当前执行环境的上下文时，强制使用一致的命名
    'consistent-this': ['error', '_this'],
    // 要求或禁止在函数标识符和其调用之间有空格
    'func-call-spacing': ['error', 'never'],
    // 要求函数名与赋值给它们的变量名或属性名相匹配
    'func-name-matching': 'error',
    // 要求或禁止使用命名的 function 表达式
    'func-names': ['error', 'as-needed'],
    // 强制在函数括号内使用一致的换行
    'function-paren-newline': ['error', 'multiline'],
    // 禁用指定的标识符
    'id-blacklist': ['error', 'data', 'err', 'e', 'cb', 'callback'],
    // 强制标识符的最小和最大长度
    'id-length': 'error',
    // 强制隐式返回的箭头函数体的位置
    'implicit-arrow-linebreak': ['error', 'beside'],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    'key-spacing': ['error', { 'beforeColon': false }],
    // 强制在关键字前后使用一致的空格
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    // 强制行注释的位置
    'line-comment-position': ['error', { 'position': 'above' }],
    // 要求在注释周围有空行
    'lines-around-comment': ['error', { 'beforeBlockComment': true }],
    // 要求或禁止类成员之间出现空行
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    // 要求构造函数首字母大写
    'new-cap': ['error', { 'newIsCap': true, 'capIsNew': true, 'properties': true }],
    // 强制或禁止调用无参构造函数时有圆括号
    'new-parens': 'error',
    // 要求方法链中每个调用都有一个换行符
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 2 }],
    // 禁止 if 作为唯一的语句出现在 else 语句中
    'no-lonely-if': 'error',
    // 禁止混合使用不同的操作符
    'no-mixed-operators': ['error', { 'groups': [['&', '|', '^', '~', '<<', '>>', '>>>'], ['&&', '||']] }],
    // 禁止连续赋值
    'no-multi-assign': 'error',
    // 禁止出现多行空行
    'no-multiple-empty-lines': 'error',
    // 禁用行尾空格
    'no-trailing-spaces': ['error', { 'skipBlankLines': false, 'ignoreComments': false }],
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    'no-unneeded-ternary': 'error',
    // 禁止属性前有空白
    'no-whitespace-before-property': 'error',
    // 强制单个语句的位置
    'nonblock-statement-body-position': ['error', 'beside'],
    // 强制大括号内换行符的一致性
    'object-curly-newline': ['error', { 'consistent': true }],
    // 强制在大括号中使用一致的空格
    'object-curly-spacing': ['error', 'never'],
    // 强制函数中的变量要么一起声明要么分开声明
    'one-var': ['error', 'never'],
    // 要求或禁止在变量声明周围换行
    'one-var-declaration-per-line': ['error', 'initializations'],
    // 要求或禁止在可能的情况下使用简化的赋值操作符
    'operator-assignment': ['error', 'always'],
    // 要求对象字面量属性名称用引号括起来
    'quote-props': ['error', 'always'],
    // 强制在圆括号内使用一致的空格
    'space-in-parens': ['error', 'never'],
    // 要求操作符周围有空格
    'space-infix-ops': 'error',
    // 强制在一元操作符前后使用一致的空格
    'space-unary-ops': 'error',
    // 强制在注释中 // 或 /* 使用一致的空格
    'spaced-comment': ['error', 'always'],
    // 强制在 switch 的冒号左右有空格
    'switch-colon-spacing': ['error', { 'after': false, 'before': true }],
    // 要求或禁止在模板标记和它们的字面量之间有空格
    'template-tag-spacing': 'error',
    // 要求正则表达式被括号括起来
    'wrap-regex': 'error',
    // 要求箭头函数体使用大括号
    'arrow-body-style': ['error', 'as-needed'],
    // 要求箭头函数的参数使用圆括号
    'arrow-parens': ['error', 'as-needed'],
    // 强制箭头函数的箭头前后使用一致的空格
    'arrow-spacing': 'error',
    // 要求在构造函数中有 super() 的调用
    'constructor-super': 'error',
    // 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': ['error', { 'before': true, 'after': false }],
    // 禁止在可能与比较操作符相混淆的地方使用箭头函数
    'no-confusing-arrow': 'error',
    // 禁止重复模块导入
    'no-duplicate-imports': ['error', { 'includeExports': true }],
    // 禁止在对象中使用不必要的计算属性
    'no-useless-computed-key': 'error',
    // 禁用不必要的构造函数
    'no-useless-constructor': 'error',
    // 禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    'no-useless-rename': 'error',
    // 要求使用 let 或 const 而不是 var
    'no-var': 'error',
    // 要求或禁止对象字面量中方法和属性使用简写语法
    'object-shorthand': 'error',
    // 要求回调函数使用箭头函数
    'prefer-arrow-callback': 'error',
    // 要求使用 const 声明那些声明后不再被修改的变量
    'prefer-const': 'error',
    // 优先使用数组和对象解构
    'prefer-destructuring': ['error', {'array': true,'object': true}, {'enforceForRenamedProperties': false}],
    // 禁用 parseInt() 和 Number.parseInt()，使用二进制，八进制和十六进制字面量
    'prefer-numeric-literals': 'error',
    // 要求使用剩余参数而不是 arguments
    'prefer-rest-params':'error',
    // 要求使用扩展运算符而非 .apply()
    'prefer-spread': 'error',
    // 要求使用模板字面量而非字符串连接
    'prefer-template': 'error',
    // 强制剩余和扩展运算符及其表达式之间有空格
    'rest-spread-spacing': ['error', 'never'],
    // 强制模块内的 import 排序
    'sort-imports': 'error',
    // 要求 symbol 描述
    'symbol-description': 'error',
    // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
    'template-curly-spacing': 'error',
    // 强制在 yield* 表达式中 * 周围使用空格
    'yield-star-spacing': ['error', 'after'],
  }
};
