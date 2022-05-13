const isPangram  = require('../pangram');

// test('checking toLowerCase with all caps', () => {
//     expect(isPangram('HELLO')).toBe('hello');
// });

// test('checking toLowerCase with lower case', () => {
//     expect(isPangram('hello world')).toBe('hello world');
// });

// test('checking if string is an array', () => {
//     expect(isPangram('hello')).toStrictEqual(['h','e','l','o']);
// });

// test('checking string to set', () => {
//     expect(isPangram('hello')).toBe(['h','e','l', 'o']);
// })

test('checking string length', () => {
    expect(isPangram('hello')).toBe(false);
});

test('checking string length', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog')).toBe(true);
})