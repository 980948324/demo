const fs = require('fs')
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    outputDir: "dist",
    assetsDir: "assets",
    lintOnSave: false,
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://59.110.233.102:80',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}