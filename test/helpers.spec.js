const test = require('ava');

const { joinPathSlash, capitalize } = require('../src/helpers');

test('capitalizeshould works with one word', (t) => {
    const value = capitalize('string');
    t.is(value, 'String');
});

test('capitalize should works with two word', (t) => {
    const value = capitalize('string string');
    t.is(value, 'String string');
});

test('joinPathSlash should works with windows paths', (t) => {
    const value = joinPathSlash('\\test\\foo');
    t.is(value, '/test/foo');
});

test('joinPathSlash should works with basic paths', (t) => {
    const value = joinPathSlash('/test/foo');
    t.is(value, '/test/foo');
});
