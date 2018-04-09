/**
 * This file acts as a CJS bridge to the title-case function.
 */
const esmRequire = require('esm')(module);

module.exports = esmRequire('./lib/title-case').default;
