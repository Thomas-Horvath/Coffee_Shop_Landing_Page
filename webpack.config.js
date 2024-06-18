
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        index: './scripts/index.js',
        products: './scripts/products.js',
        contact: './scripts/contact.js',
        booking: './scripts/booking.js',
        common: './scripts/common.js'
    },
    output: {
        filename: 'scripts/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg|svg|webp)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[path][name][ext]',
                },
            },
            {
                test: /\.(ttf|otf|eot|woff(2)?)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },

        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].bundle.css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: false
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: './about.html',
            inject: false

        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            template: './contact.html',
            inject: false

        }),
        new HtmlWebpackPlugin({
            filename: 'welcome.html',
            template: './welcome.html',
            inject: false

        }),
        new HtmlWebpackPlugin({
            filename: 'products.html',
            template: './products.html',
            inject: false

        }),
        new HtmlWebpackPlugin({
            filename: 'booking.html',
            template: './booking.html',
            inject: false

        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: './assets', to: 'assets' },
                { from: './fonts', to: 'fonts' },
                { from: './data', to: 'data' }
            ]
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            `...`,
            new CssMinimizerPlugin(),
        ],
    },
    mode: 'production',
};