let webpack = require('webpack')
let path = require('path')

let webpackConfig = {
	resolve: {
		alias: {
			core: path.resolve(__dirname, '../src/core')
		}
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			}
		]
	}
}

module.exports = {
	// base path that will be used to resolve all patterns (eg. files, exclude)
	basePath: '',


	// frameworks to use
	// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
	frameworks: ['mocha', 'chai'],


	// list of files / patterns to load in the browser
	files: [
		'../test/unit/index.js'
	],


	// list of files to exclude
	exclude: [
	],


	// preprocess matching files before serving them to the browser
	// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
	preprocessors: {
		'../test/unit/index.js': ['webpack', 'sourcemap', 'coverage']
	},

	// test results reporter to use
	// possible values: 'dots', 'progress'
	// available reporters: https://npmjs.org/browse/keyword/karma-reporter
	reporters: ['progress', 'mocha', 'coverage'],

	coverageReporter: {
		dir: '../coverage',
		reporters: [
			{ type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
			{ type: 'html', subdir: 'report-html' }
		]
	},


	// web server port
	port: 9876,


	// enable / disable colors in the output (reporters and logs)
	colors: true,


	// enable / disable watching file and executing tests whenever any file changes
	autoWatch: true,


	// Continuous Integration mode
	// if true, Karma captures browsers, runs the tests and exits
	singleRun: false,

	// Concurrency level
	// how many browser should be started simultaneous
	concurrency: Infinity,

	webpack: webpackConfig,
	webpackMiddleware: {
		noInfo: true
	}
}
