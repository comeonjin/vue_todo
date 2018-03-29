/**
 * 代码分离的webpack.config.js设置方式
 */

 const path = require('path')
 const webpack = require('webpack')
 const HtmlWebpackPlugin = require('html-webpack-plugin')

 const isDev = (process.env.NODE_ENV === 'development')

 console.log('env is __' + process.env.NODE_ENV)

 const config = {
    mode: "development",
    entry: {
        index: path.join(__dirname, "src/index.js"),
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"' 
            }
        }),
        new HtmlWebpackPlugin({
            title: "code splitting"
        })
    ],
    module:{
        rules: [
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            },
            {
                test: /\.jsx$/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader', //postcss-loader处理的时候也会生成sourceMap,如果postcss-loader检测到之前已经生成过sourceMap就会使用之前生成的，不再重复创建提高打包效率
                        options: {
                            sourceMap: true 
                        }
                    },
                    'stylus-loader' //这里的解析会自动生成sourceMap
                ]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    }
 }

if(isDev){
    config.devtool = '#cheap-module-eval-source-map',
    config.devServer = {
        port: 8000,
        host: '0.0.0.0',
        overlay: { //webpack编译错误显示到网页
            errors: true
        },
        hot: true, //内置的HotModuleReplacement的组件热更新功能
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports = config