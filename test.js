import test from 'ava';
import w3counter from './';

test('fetch 10 web browsers', t => {
	t.plan(2);

	w3counter('browser', (err, data) => {
		t.ifError(err);
		t.is(data.length, 10);
	});
});

test('fetch 10 countries', t => {
	t.plan(2);

	w3counter('country', (err, data) => {
		t.ifError(err);
		t.is(data.length, 10);
	});
});

test('fetch 10 operating systems', t => {
	t.plan(2);

	w3counter('os', (err, data) => {
		t.ifError(err);
		t.is(data.length, 10);
	});
});

test('fetch 10 screen resolutions', t => {
	t.plan(2);

	w3counter('res', (err, data) => {
		t.ifError(err);
		t.is(data.length, 10);
	});
});
