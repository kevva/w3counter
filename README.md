# w3counter [![Build Status](https://travis-ci.org/kevva/w3counter.svg?branch=master)](https://travis-ci.org/kevva/w3counter)

> An API for w3counter to get the most popular countries, operating systems, screen resolutions and web browsers

## Install

```bash
$ npm install --save w3counter
```

## Usage

```js
var w3counter = require('w3counter');

w3counter('browser', function (err, data) {
    console.log(data);
    // => ['Chrome 32', 'Safari 7', 'Chrome 33', 'Firefox 27', 'Internet Explorer 11', 'Firefox 26', 'Internet Explorer 8', 'Safari 6', 'Android 4', 'Internet Explorer 10']
});

w3counter('res', function (err, data) {
    console.log(data);
    // => ['1366x768','1024x768','1280x800','1920x1080','1440x900','768x1024', '1280x1024','1600x900','320x480','320x568']
});
```

## API

### w3counter(type, cb)

Returns an array with the ten most popular items from the type you provided from
[w3counter.com](http://www.w3counter.com/globalstats.php).

Available types are:

* `browser` — Ten most popular web browsers
* `country` — Ten most popular countries
* `os` — Ten most popular operating systems
* `res` — Ten most popular screen resolutions

## CLI

```bash
$ npm install --global w3counter
```

```bash
$ w3counter --help

Usage
  $ w3counter <type>

Example
  $ w3counter browser
  $ w3counter country
  $ w3counter os
  $ w3counter res
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
