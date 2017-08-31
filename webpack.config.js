var webpack = require('webpack')
,path = require('path')
,ROOT_PATH = path.resolve(__dirname)
,DIST_PATH = path.resolve(ROOT_PATH, 'dist')
,APP_PATH = path.resolve(ROOT_PATH, 'src')
;
module.exports = {
    entry: './combo.js',
    output:{
        path:DIST_PATH,
        filename:'./app.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress:{
              warnings: false,
              drop_debugger: true,
              drop_console: true
            }
          })
    ]
}