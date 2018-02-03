# Assemble-template [![Build Status](https://travis-ci.org/herber/assemble-template.svg?branch=master)](https://travis-ci.org/herber/assemble-template) [![codecov](https://codecov.io/gh/herber/assemble-template/branch/master/graph/badge.svg)](https://codecov.io/gh/herber/assemble-template)

Assemble the string / value pieces a tagged template literal - function receives as params.

## Install

```
$ npm install assemble-template
```

## Usage

```js
const assembleTemplate = require('assemble-template');

const dashify = (strings, ...values) => {
  let str = assembleTemplate(strings, ...values);

  return str.replace(/\s+/g, '-').toLowerCase();
};

const dashifyed = 'dashifyed';
dashify`this will be ${ dashifyed }`;
```

## API

### assembleTemplate(strings, ...values)

#### strings

Type: `array`

An array of string

#### ..values

Type: `string`

A parameter list of values;

## License

MIT © [Tobias Herber](http://tobihrbr.com)
