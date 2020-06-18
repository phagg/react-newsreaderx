const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 8 + 8 to equal 16', () => {
expect(sum(8, 8)).toBe(16);
});