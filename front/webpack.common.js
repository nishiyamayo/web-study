const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx$/,
                use: [{
                    loader: 'awesome-typescript-loader'
                }]
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'source-map-loader',
                    options: {
                        enforce: 'pre',
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }]
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve('./src'),
        ],
        extensions: ['.tsx', '.js', '.ts', 'json']
    },
    // plugins: [
    //     // new CleanWebpackPlugin(['dist/*']) for < v2 versions of CleanWebpackPlugin
    //     new CleanWebpackPlugin(),
    //     new HtmlWebpackPlugin({
    //         title: 'Production'
    //     })
    // ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist'
    }
};