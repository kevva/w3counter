'use strict';

var test = require('ava');
var w3counter = require('./');

test('fetch 10 web browsers', function (t) {
	t.plan(2);

	w3counter('browser', function (err, data) {
		t.assert(!err, err);
		t.assert(data.length === 10);
	});
});

test('fetch 10 countries', function (t) {
	t.plan(2);

	w3counter('country', function (err, data) {
		t.assert(!err, err);
		t.assert(data.length === 10);
	});
});

test('fetch 10 operating systems', function (t) {
	t.plan(2);

	w3counter('os', function (err, data) {
		t.assert(!err, err);
		t.assert(data.length === 10);
	});
});

test('fetch 10 screen resolutions', function (t) {
	t.plan(2);

	w3counter('res', function (err, data) {
		t.assert(!err, err);
		t.assert(data.length === 10);
	});
});
