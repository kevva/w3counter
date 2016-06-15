#!/usr/bin/env node
'use strict';
var fs = require('fs');
var Promise = require('pinkie-promise');
var pify = require('pify');
var utils = require('./lib/utils');
var fsP = pify(fs, Promise);

utils.load()
	.then(function (stats) {
		var data = {
			timestamp: new Date(),
			stats: stats
		};

		return fsP.writeFile('data.json', JSON.stringify(data, undefined, '\t'));
	})
	.catch(function (err) {
		console.error(err);
		process.exit(1);
	});
