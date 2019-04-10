module.exports = {
  extends: '@mi11er',
  env: {
    mocha: true,
  },
  rules: {
    'node/no-unsupported-features/es-syntax': {
      ignores: ['modules'],
    },
  },
};
