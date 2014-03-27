'use strict';

var cheerio = require('cheerio');
var http = require('http');
var mapKey = require('map-key');

/**
 * w3counter API
 *
 * @param {String} type
 * @param {Function} cb
 * @api public
 */

module.exports = function (type, cb) {
    var chunk = '';
    var ret = [];
    var types = {
        browser: 'Web Browsers',
        country: 'Countries',
        os: 'Operating Systems',
        res: 'Screen Resolutions'
    };
    var method = mapKey.equal(types, type);

    http.get('http://www.w3counter.com/globalstats.php', function (res) {
        if (res.statusCode !== 200) {
            return cb(res.statusCode);
        }

        res.on('data', function (data) {
            chunk += data;
        });

        res.on('end', function () {
            var $ = cheerio.load(chunk);

            $('th').filter(function () {
                return this.text() === method;
            }).parent().nextAll('.item').each(function () {
                ret.push(this.text());
            });

            if (ret.length === 0) {
                return cb('Couldn\'t get any ' + method.toLowerCase());
            }

            cb(null, ret);
        });
    }).on('error', function (err) {
        return cb(err);
    });
};
