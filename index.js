'use strict';

var cheerio = require('cheerio');
var got = require('got');

module.exports = function (type, cb) {
	if (typeof type !== 'string') {
		throw new Error('Provide a type');
	}

	var types = {
		browser: 'Web Browsers',
		country: 'Countries',
		os: 'Operating Systems',
		res: 'Screen Resolutions'
	};

	var method = types[type];
	var ret = [];

	got('http://www.w3counter.com/globalstats.php', function (err, data) {
		if (err) {
			if (!isNaN(err)) {
				err = new Error(err);
			}

			if (err.message < 200 || err.message > 299) {
				err.message = 'Couldn\'t connect to w3counter.com';
				err.noStack = true;
			}

			cb(err);
			return;
		}

		var $ = cheerio.load(data);

		$('th').filter(function (i, el) {
			return $(el).text() === method;
		}).parent().nextAll('tr').each(function (i, el) {
			ret.push({
				item: $(el).children('.item').text(),
				percent: $(el).children('.pct').text()
			});
		});

		if (!ret.length) {
			cb(new Error('Couldn\'t get any ' + method.toLowerCase()));
			return;
		}

		cb(null, ret);
	});
};
