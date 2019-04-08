module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    // 'eslint:recommended'

  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'rules': {
        'no-console': 'off',
        'no-debugger':  'off',
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'warn',
            'unix'
        ],
        'quotes': [
            'warn',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ]
    }
  },
  parserOptions: {
    parser: 'babel-eslint',
    'ecmaVersion': 2018,
    'sourceType': 'module'
  }
}
