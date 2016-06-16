'use strict';
var got = require('got');
var cheerio = require('cheerio');

var types = {
	'Web Browsers': 'browser',
	'Platforms': 'os',
	'Screen Resolutions': 'res'
};

exports.types = Object.keys(types).map(function (key) {
	return types[key];
});

exports.load = function () {
	return got('www.w3counter.com/globalstats.php')
		.then(function (res) {
			var $ = cheerio.load(res.body);

			var stats = {};

			$('th').each(function (i, el) {
				var type = $(el).text().replace(/^Top 10/, '').trim();

				if (!types[type]) {
					return;
				}

				type = types[type];

				$(el).parent().nextAll('tr').each(function (i, el) {
					if (!stats[type]) {
						stats[type] = [];
					}

					stats[type].push({
						item: $(el).children('.item').text(),
						percent: $(el).children('.pct').text()
					});
				});
			});

			return stats;
		});
};
