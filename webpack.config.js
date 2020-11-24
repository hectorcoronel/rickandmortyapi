const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve:{
        extension: ['.js'],
    },
    module:{
        rules:[
            {
                test: /\.js?$/,
                exclude: /node_modeles/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugin:[
        new HtmlWebpackPlugin([
            {
                inyect: true,
                template: './public/index.html',
                filename: './index.html'
        }
    ])
    ]
}