module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'max-len': 'off',
      },
    },
    {
      files: [
        'server/**/*.spec.js',
        'server/**/*.spec-e2e.js',
      ],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'max-len': ['error', { code: 80 }],
    'import/no-relative-parent-imports': 'off',
    'import/no-relative-packages': 'off',
    'import/extensions': 'off',
  },
};
