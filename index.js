'use strict';

var cheerio = require('cheerio');
var got = require('got');

/**
 * w3counter API
 *
 * @param {String} type
 * @param {Function} cb
 * @api public
 */

module.exports = function (type, cb) {
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
            cb(err);
            return;
        }

        var $ = cheerio.load(data);

        $('th').filter(function () {
            return this.text() === method;
        }).parent().nextAll('.item').each(function () {
            ret.push({ item: this.text(), percent: $(this).next('.pct').text() });
        });

        if (ret.length === 0) {
            cb(new Error('Couldn\'t get any ' + method.toLowerCase()));
            return;
        }

        cb(null, ret);
    });
};
