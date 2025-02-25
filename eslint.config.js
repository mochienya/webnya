import antfu from '@antfu/eslint-config'
// import eslintPluginAstro from 'eslint-plugin-astro'

export default antfu({
  // ...eslintPluginAstro.configs.recommended,
  stylistic: {
    quotes: 'single',
    overrides: {
      'no-use-before-define': ['off'],
      'antfu/no-top-level-await': ['off'],
      'style/comma-dangle': ['error', { objects: 'always-multiline', arrays: 'always-multiline' }],
      'style/max-statements-per-line': ['off'],
      'antfu/top-level-function': ['off'],
      'style/jsx-wrap-multilines': ['off'],
      'style/jsx-closing-tag-location': ['off'],
    },
  },
  rules: {
    'no-new': 'off',
  },
})
