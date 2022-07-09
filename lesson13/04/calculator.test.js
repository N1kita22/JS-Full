import { calc } from './calculator';

it(`I'm waiting for the function to work according to the condition`, () => {
  const res = calc('2 + 2');
  expect(res).toBe('2 + 2 = 4');
});

it(`I'm waiting for the function to work according to the condition`, () => {
  const res = calc('2 - 2');
  expect(res).toBe('2 - 2 = 0');
});

it(`I'm waiting for the function to work according to the condition`, () => {
  const res = calc('2 * 2');
  expect(res).toBe('2 * 2 = 4');
});

it(`I'm waiting for the function to work according to the condition`, () => {
  const res = calc('2 / 2');
  expect(res).toBe('2 / 2 = 1');
});
