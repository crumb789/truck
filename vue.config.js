const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
  ? '/truck/'
  : '/', 

  
  devServer: {
    historyApiFallback: {
      rewrites: [
        { from: /./, to: '/truck/index.html' }
      ]
    }
  }
})


