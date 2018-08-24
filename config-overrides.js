const rewireReactHotLoader = require('react-app-rewire-hot-loader');
const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');

module.exports = function override(config, env) {
  config = injectBabelPlugin('react-loadable/babel', config);
  if (process.env.NODE_ENV === 'development') {
    config = rewireReactHotLoader(config, env);
  }

  return config;
};
