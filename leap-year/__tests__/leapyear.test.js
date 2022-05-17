const isLeapYear = require('../leapyear');

test('', () => {
    expect(isLeapYear(2020)).toBe(true);
});

test('', () => {
    expect(isLeapYear(2018)).toBe(false);
});

test('', () => {
    expect(isLeapYear(1700)).toBe(false);
});

test('', () => {
    expect(isLeapYear(1600)).toBe(true);
});
