let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,

        before: function(app, server){
            app.get('/api/user', function(req, res){
                res.json({name: 'wei',age: '21'})
            })
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
                temlate: './index.html',
            }
        )
    ]
}