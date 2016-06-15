import test from 'ava';
import w3counter from './';

test('fetch 10 web browsers', async t => {
	const data = await w3counter('browser');
	t.is(data.length, 10);
});

test('fetch 10 operating systems', async t => {
	const data = await w3counter('os');
	t.is(data.length, 10);
});

test('fetch 10 screen resolutions', async t => {
	const data = await w3counter('res');
	t.is(data.length, 10);
});

test('error if no type is defined', async t => {
	try {
		await w3counter();
	} catch (err) {
		t.is(err.message, 'Expected a string');
	}
});
