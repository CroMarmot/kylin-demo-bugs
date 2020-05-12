// var px2rem = require('postcss-px2rem');
// var proxy = require('http-proxy-middleware');

exports.pluginName = '@ali/kylin-plugin-custom';
exports.default = function () {
  return {
    // 修改 webpack 配置
    webpack: function modifyWebpackConfig(webpackConfig) {

      //  如果要开启 px2rem, cnpm i --save-dev postcss-px2rem 安装该模块并取消下面的注释
        // webpackConfig.vue.postcss.push(
        //   px2rem({
        //     remUnit: 100
        //   })
        // );
      
      return webpackConfig;
    },

    // 修改 babel 配置
    babel: function modifyBabelConfig(babelConfig) {
      return babelConfig;
    },

    //  接入 express 插件, 依赖 build@ 0.1.49+ 及以上版本
    express: function modifyExpress(expressInstance) {
      //  如果要使用 http-proxy-middleware, cnpm i --save-dev http-proxy-middleware 安装该模块并取消下面的注释

      // expressInstance.use(
      //     proxy('/api', {target: 'http://localhost:3000'})
      // );

      //// http://localhost:8090/api/foo/bar -> http://localhost:3000/api/foo/bar
    },
  }
}
