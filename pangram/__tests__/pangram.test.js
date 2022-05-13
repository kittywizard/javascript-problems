const isPangram  = require('../pangram');

test('checking string length', () => {
    expect(isPangram('hello')).toBe(false);
});

test('checking string length', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog')).toBe(true);
});

test('remove numbers', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog 123')).toBe(true);
});

test('remove non-letters', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog.. ,;?')).toBe(true);
});

test('remove non-letters and non-numbers', () => {
    expect(isPangram('this is DEFINITELY NOT TRUE. 123?!?')).toBe(false);
});

test('caps lock is not cool', () => {
    expect(isPangram('THE quick brown FOX jumps over the LAZY dog.')).toBe(true);
});

test('the actual alphabet', () => {
    expect(isPangram('abcdefghijklmnopqrstuvwxyz')).toBe(true);
})