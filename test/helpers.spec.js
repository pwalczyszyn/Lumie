const test = require('ava');

const { capitalize, joinUrlPath } = require('../src/helpers');

test('capitalizeshould works with one word', (t) => {
    const value = capitalize('string');
    t.is(value, 'String');
});

test('capitalize should works with two word', (t) => {
    const value = capitalize('string string');
    t.is(value, 'String string');
});

test('joinUrlPath should work with basic paths', (t) => {
    const value = joinUrlPath('/test/', '/foo', 'bar');
    t.is(value, '/test/foo/bar');
});
