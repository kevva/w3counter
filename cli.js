#!/usr/bin/env node
'use strict';

var input = process.argv.slice(2);
var pkg = require('./package.json');
var w3counter = require('./');

/**
 * Help screen
 */

function help() {
    console.log(pkg.description);
    console.log('');
    console.log('Usage');
    console.log('  $ w3counter <type>');
    console.log('');
    console.log('Example');
    console.log('  $ w3counter browser');
    console.log('  $ w3counter country');
    console.log('  $ w3counter os');
    console.log('  $ w3counter res');
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

if (input.length === 0) {
    console.error('Please provide a type. Available types are:');
    console.error('  browser — Ten most popular web browsers');
    console.error('  country — Ten most popular countries');
    console.error('  os — Ten most popular operating systems');
    console.error('  res — Ten most popular screen resolutions');
    return;
}

/**
 * Run
 */

w3counter(input, function (err, types) {
    if (err) {
        throw err;
    }

    types.forEach(function (type, i) {
        i = i + 1;
        console.log(i + '. ' + type.item);
    });
});
