module.exports = {
  rules: {
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/31
     */
    'react/display-name': 'error',
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/28
     */
    'react/prop-types': 0,
    /**
     * https://github.com/titicacadev/eslint-config-triple/issues/92
     */
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
}
