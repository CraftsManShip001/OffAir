const { override, addWebpackModuleRule } = require('customize-cra');

module.exports = override(
  addWebpackModuleRule({
    test: /\.mdx$/,
    use: [
      {
        loader: 'babel-loader',
      },
      {
        loader: '@mdx-js/loader',
      },
    ],
  })
);
