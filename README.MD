pino-tcp
=========

[![NPM Version][npm-image]][npm-url]

TCP transport for pino, used to send logs to logback for elasticsearch.

## Installation

```bash
npm i pino-tcp
```

## Usage

```js
const config = {
    host: "127.0.0.1",
    port: 40000,
    child: {name: 'myName', app: 'myApp', group: 'myGroup', env: 'test'}
};

const log = require('./')(config);
log.info({code: 200}, 'hello');
```

## Tests

```bash
no scripts
```

## Contributing

...

[npm-image]: https://img.shields.io/npm/v/pino-tcp.svg
[npm-url]: https://www.npmjs.com/package/pino-tcp