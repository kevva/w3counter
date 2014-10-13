#!/usr/bin/env node
'use strict';

var input = process.argv.slice(2);
var pkg = require('./package.json');
var w3counter = require('./');

/**
 * Help screen
 */

function help() {
	console.log([
		'',
		pkg.description,
		'',
		'  Usage',
		'    w3counter <type>',
		'',
		'  Example',
		'    w3counter browser',
		'    w3counter country',
		'    w3counter os',
		'    w3counter res'
	].join('\n'));
}

/**
 * Show help
 */

if (input.indexOf('-h') !== -1 || input.indexOf('--help') !== -1) {
	help();
	return;
}

/**
 * Show package version
 */

if (input.indexOf('-v') !== -1 || input.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

/**
 * Show error if no type is provided
 */

if (!input.length) {
	console.error([
		'Please provide a type. Available types are:',
		'  browser — Ten most popular web browsers',
		'  country — Ten most popular countries',
		'  os — Ten most popular operating systems',
		'  res — Ten most popular screen resolutions'
	].join('\n'));
	process.exit(1);
}

/**
 * Run
 */

w3counter(input, function (err, types) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	types.forEach(function (type, i) {
		i = i + 1;
		console.log(i + '. ' + type.item);
	});
});
