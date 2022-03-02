const {override, adjustStyleLoaders} = require('customize-cra');
module.exports = override(
    adjustStyleLoaders((rule) => {
      if (rule.test.toString().includes('sass')) {
        rule.use.push({
          loader: 'sass-resources-loader',
          options: {
            resources: [
              './src/styles/variables.scss',
              './src/styles/mixins.scss',
            ],
          },
        });
      }
    }),
);
