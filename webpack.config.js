const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const mode = process.env.NODE_ENV || 'production';
const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined';

const isProduction = mode === 'production';

const jsRegEx = /\.js$/;
const scssRegEx = /\.scss$/;
const excludeRegEx = /node_modules/;

const entry = ['./src/js/app.js', './src/scss/app.scss'];

const output = {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
};

const modules = {
    rules: [
        {
            enforce: 'pre',
            test: jsRegEx,
            exclude: excludeRegEx,
            loader: 'eslint-loader',
        },
        {
            test: jsRegEx,
            exclude: excludeRegEx,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        {
            test: scssRegEx,
            exclude: excludeRegEx,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'fast-sass-loader'],
            }),
        },
    ],
};

const plugins = [new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true })];

if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
}

if (isProduction) {
    plugins.push(
        new OptimizeCssnanoPlugin({
            cssnanoOptions: {
                preset: [
                    'default',
                    {
                        discardComments: {
                            removeAll: true,
                        },
                    },
                ],
            },
        }),
    );
}

module.exports = {
    mode,
    entry,
    output,
    module: modules,
    plugins,
};
