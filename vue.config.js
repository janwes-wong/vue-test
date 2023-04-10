const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  // 开启代理服务器(方式一)
  devServer: {
    proxy: 'http://localhost:48000'
  },

  // 开启代理服务器(方式二)
  /* devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:48000/api',
        // websocket
        ws: true,
        changeOrigin: true
      },
      '/test': {
        target: 'http://localhost:52000/test'
      }
    }
  } */
})
