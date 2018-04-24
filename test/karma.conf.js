const path = require('path');

const webpackConfig = {
    module: {
        rules: [{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.js'],
        alias: {
            '@': path.join(__dirname, '..', 'src')
        }
    },
    devtool: '#inline-source-map'
};

module.exports = function(config){
    const CONFIG = {
        basePath: '../',
        exclude: [],

        files: [
            'test/index.js'
        ],
        preprocessors: {
            'test/index.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true
        },

        browsers: ['jsdom'],
        concurrency: 1,

        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-jsdom-launcher',
            'karma-mocha-reporter',
            'karma-sourcemap-loader',
            'karma-webpack'
        ],

        reporters: ['mocha'],
        logLevel: config.LOG_WARN,
        colors: true,

        port: 1337,
        autoWatch: false,
        singleRun: true,

        // Try to prevent disconnects
        captureTimeout: 60000,
        browserDisconnectTimeout: 10000,
        browserDisconnectTolerance: 1,
        browserNoActivityTimeout: 30000
    };

    config.set(CONFIG);
};