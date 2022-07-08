/*
First test with Jest
  */

it('17 равно 17', () => {
  expect(17).toEqual(17);
});

it('18 равно 17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = arr => {
  return arr.filter(el => el % 2 == 0);
};
it('Should ...', () => {
  const result = getEvenNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([2, 4]);
});
