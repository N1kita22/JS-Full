import { reverseArray, withdraw, getAdults } from './testing3Func';

it('Testing function reverseArray', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it('Testing function withdraw', () => {
  const result = withdraw(['Ann', 'Jo', 'u'], [100, 60, 30], 'u', 50);
  expect(result).toBe(-1);
});

it('Testing function withdraw', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toEqual({ Ann: 56 });
});
