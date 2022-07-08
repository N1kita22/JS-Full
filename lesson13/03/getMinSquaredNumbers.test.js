import getNum from './getMinSquaredNumbers';

it('Should that the function will pass the test', () => {
  const result = getNum([-222, 3, -2, 9, 45, -34, 2, 1]);
  expect(result).toBe(1);
});

it('Should that the function will pass the test', () => {
  const result = getNum([]);
  expect(result).toBe(null);
});

it('Should that the function will pass the test', () => {
  const result = getNum('string?');
  expect(result).toBe(null);
});
