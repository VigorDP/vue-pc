// 以下配置基于 @vue/cli 3.6.3
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const resolve = require('path').resolve;
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  css: {
    extract: true,
    // 启用 CSS modules for all css
    modules: false
  },
  configureWebpack: {
    optimization: {
      concatenateModules: false,
      runtimeChunk: {
        name: 'manifest'
      },
      splitChunks: {
        cacheGroups: {
          // 首先: 分离 vue 相关库文件(通过priority属性确定打包顺序)
          vue: {
            name: 'vue',
            test: /vue[\\/]|vuex|vue-router/,
            chunks: 'initial',
            minChunks: 1,
            priority: 100
          },
          // 其次: 打包node_modules中除了vue相关库以外的库
          framework: {
            name: 'framework',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
            priority: 10
          }
          // 最后：其他业务代码自动打到 output.filename 指定的文件
        }
      }
    },
    plugins: process.env.NODE_ENV === 'production' ? [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static'
      })
    ] : [],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.scss', '.less', '.css', '.vue'], // 该扩展名类型文件在引入时可省略扩展名
      alias: {
        "@src": resolve('src'),
        '@views': resolve('src/views'),
        '@components': resolve('src/components'),
        '@styles': resolve('src/assets/styles'),
      }
    }
  },
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  },
  filenameHashing: true,
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 配置为true,才可使用template
  runtimeCompiler: false,
  productionSourceMap: true,
  parallel: require('os').cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {}
}
