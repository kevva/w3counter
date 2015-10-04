import test from 'ava';
import w3counter from './';

test('fetch 10 web browsers', t => {
	t.plan(1);

	w3counter('browser').then(data => {
		t.is(data.length, 10);
	});
});

test('fetch 10 countries', t => {
	t.plan(1);

	w3counter('country').then(data => {
		t.is(data.length, 10);
	});
});

test('fetch 10 operating systems', t => {
	t.plan(1);

	w3counter('os').then(data => {
		t.is(data.length, 10);
	});
});

test('fetch 10 screen resolutions', t => {
	t.plan(1);

	w3counter('res').then(data => {
		t.is(data.length, 10);
	});
});

test('error if no type is defined', t => {
	t.plan(2);

	w3counter().catch(err => {
		t.ok(err);
		t.is(err.message, 'Expected a string');
	});
});
