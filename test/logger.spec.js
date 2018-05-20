const test = require('ava');
const sinon = require('sinon');

const logger = require('../src/logger');

console.log = sinon.spy(); /* eslint no-console: "off" */

test('logger.log should not be called', (t) => {
    logger.log('Hello');
    t.is(console.log.notCalled, true);
});

test('logger.log should be called', (t) => {
    logger.verbose = true;
    logger.log('Hello');
    t.is(console.log.calledOnceWith('Hello'), true);
});
