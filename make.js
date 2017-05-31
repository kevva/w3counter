#!/usr/bin/env node
'use strict';
const fs = require('fs');
const pify = require('pify');
const utils = require('./lib/utils');

const fsP = pify(fs);

utils.load()
	.then(stats => {
		const data = {
			timestamp: new Date(),
			stats
		};

		return fsP.writeFile('data.json', JSON.stringify(data, undefined, '\t'));
	})
	.catch(err => {
		console.error(err);
		process.exit(1);
	});
