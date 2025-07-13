const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
  ? '/truck/'
  : '/', 

// гит не создавал страницы, что странно, и пришлось добавить 404html, эту историю и в html скрипт  
  // devServer: {
  //   historyApiFallback: {
  //     rewrites: [
  //       { from: /./, to: '/truck/index.html' }
  //     ]
  //   }
  // }
  devServer: {
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /\/catalogs/, to: '/index.html' }, // явно для /catalog
        { from: /./, to: '/index.html' } // fallback для всех остальных маршрутов
      ]
    },
    hot: true,
    open: true
  }
})


