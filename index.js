'use strict';
var Promise = require('pinkie-promise');
var utils = require('./lib/utils');
var stats = require('./data.json').stats;

module.exports = function (type) {
	if (typeof type !== 'string') {
		return Promise.reject(new TypeError('Expected a string'));
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
