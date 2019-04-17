const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const mode = process.env.NODE_ENV || 'production';
const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined';

const isProduction = mode === 'production';

const entry = ['./src/js/app.js', './src/scss/app.scss'];

const output = {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
};

const modules = {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env'],
                },
            },
        },
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'fast-sass-loader'],
            }),
        },
    ],
};

const plugins = [
    new ExtractTextPlugin({ filename: 'bundle.css', allChunks: true }),

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
];

if (isAnalyze) {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
    mode,
    entry,
    output,
    module: modules,
    plugins,
};
