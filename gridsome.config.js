// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [
        path.resolve(__dirname, "node_modules/bootstrap/scss/_functions.scss"),
        path.resolve(__dirname, "node_modules/bootstrap/scss/_variables.scss"),
        path.resolve(__dirname, "node_modules/bootstrap/scss/_mixins.scss"),
        path.resolve(__dirname, "src/styles/_mixins.scss"),
        path.resolve(__dirname, "src/styles/_variables-custom.scss")
      ]
    });
}
module.exports = {
  siteName: "Gridsome",
  pathPrefix: "/discover-the-awesome",
  plugins: [],
  chainWebpack: config => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // modify the options...
        options.compilerOptions.preserveWhitespace = false;
        return options;
      });
    // Load variables for all vue-files
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("scss").oneOf(type))
    );
  }
};
