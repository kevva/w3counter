#!/usr/bin/env node
'use strict';

var meow = require('meow');
var w3counter = require('./');

var cli = meow({
	help: [
		'Usage',
		'  $ w3counter <type>',
		'',
		'Example',
		'  $ w3counter browser',
		'  $ w3counter country',
		'  $ w3counter os',
		'  $ w3counter res'
	].join('\n')
});

if (!cli.input.length) {
	console.error('Provide a type');
	process.exit(1);
}

w3counter(cli.input, function (err, types) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	types.forEach(function (type, i) {
		i = i + 1;
		console.log(i + '. ' + type.item + ' (' + type.percent + ')');
	});
});
