import getSum, { getSquareArray, getOddNumbers } from './calculator.js';

it('Should some actions', () => {
  const result = getSquareArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('Should some actions', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('Should some actions', () => {
  const result = getSum(1, 3);
  expect(result).toEqual(4);
});
