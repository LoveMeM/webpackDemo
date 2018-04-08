const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    entry: __dirname + "/app/main.js", //__dirname是node.js中的一个全局变量，它指向当前执行脚本所在目录
    output: {
        path: __dirname + "/build",
        filename: "bundle-[hash].js"
    },
    devtool: "",
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {loader:"style-loader"},
                    {
                        loader:"css-loader",
                        options:{
                            modules:true,
                            localIdentName:'[name]__[local]--[hash:base64:5]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname+"/app/index.tmpl.html"
        })
    ]
}