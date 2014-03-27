/*global describe, it */
'use strict';

var assert = require('assert');
var w3counter = require('./');

describe('getBrowsers()', function () {
    it('should fetch 10 web browsers', function (cb) {
        w3counter('browser', function (err, data) {
            assert.strictEqual(data.length, 10);
            cb();
        });
    });

    it('should fetch 10 countries', function (cb) {
        w3counter('country', function (err, data) {
            assert.strictEqual(data.length, 10);
            cb();
        });
    });

    it('should fetch 10 operating systems', function (cb) {
        w3counter('os', function (err, data) {
            assert.strictEqual(data.length, 10);
            cb();
        });
    });

    it('should fetch 10 screen resolutions', function (cb) {
        w3counter('res', function (err, data) {
            assert.strictEqual(data.length, 10);
            cb();
        });
    });
});
