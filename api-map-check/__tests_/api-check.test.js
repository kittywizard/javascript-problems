const apiCheck = require('../api-check');


test('basic functionality', () => {
    expect(apiCheck('https://jsonplaceholder.typicode.com/users')).toBe(true);
})