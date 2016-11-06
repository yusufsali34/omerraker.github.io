/*jshint esversion: 6 */
(function() {
	"use strict";

	let webpack = require('webpack');

	module.exports = {

		entry: {
			a: ['./src/posts.factory.js','./src/home.factory.js','./src/posts.factory.js']
		},
		output: {
			path: 'dist/',
			filename: 'app.js'
		}
	};

})();