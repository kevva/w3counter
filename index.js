'use strict';
var Promise = require('pinkie-promise');
var utils = require('./lib/utils');
var stats = require('./data.json').stats;

module.exports = function (type) {
	if (typeof type !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
	}

	if (utils.types.indexOf(type) === -1) {
		return Promise.reject(new Error('Type \'' + type + '\' doesn\'t exist'));
	}

	return utils.load()
		.then(function (stats) {
			if (!stats[type].length) {
				throw new Error('Couldn\'t get any ' + type);
			}

			return stats[type];
		})
		.catch(function (err) {
			if (stats[type]) {
				return stats[type];
			}

			throw err;
		});
};
