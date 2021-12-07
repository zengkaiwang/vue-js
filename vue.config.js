const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const svgFilePath = resolve('src/assets/svg')

const utils = {
  assetsPath: function (_path) {
    const assetsSubDirectory =
      process.env.NODE_ENV === 'production'
        ? // 生产环境下的 static 路径
        'static3'
        : // 开发环境下的 static 路径
        'static3'

    return path.posix.join(assetsSubDirectory, _path)
  },
  resolve: function (dir) {
    return path.join(__dirname, '..', dir)
  }
}

module.exports = {
  publicPath: '/',
  productionSourceMap: false, // 开启 生产环境的 source map?
  chainWebpack (config) {
    // 推荐配置 transformAssetUrls
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(opt => {
        opt.transformAssetUrls = opt.transformAssetUrls || {}
        opt.transformAssetUrls.icon = ['data']
        return opt
      })

    // 字体文件处理
    // config.module
    //   .rule('ttf')
    //   // .test(/\.(woff2?|eot|ttf|otf)(\?.*)$/)
    //   .test(/\.ttf$/)
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .options({
    //     limit: 20240,
    //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
    //   })

    // 字体文件处理
    // config.module
    //   .rule('ttf')
    //   // .test(/\.(woff2?|eot|ttf|otf)(\?.*)$/)
    //   .test(/\.ttf$/)
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .options({
    //     limit: 200,
    //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
    //   })

    // config.module
    //   .rule('fonts')
    //   .use('url-loader')
    //   .tap((options) => {
    //     // 修改它的选项...
    //     options.limit = 102400
    //     console.log('1111111', options)
    //     return options
    //   })

    // 推荐配置 alias
    config.resolve.alias.set('@icon', svgFilePath)
  }
}
