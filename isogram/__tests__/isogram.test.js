const isIsogram = require('../isogram.js');

test('checking string', () => {
    expect(isIsogram('ambidExtrously')).toBe(true);
});

test('checking false string', () => {
    expect(isIsogram('pattERN')).toBe(false);
});