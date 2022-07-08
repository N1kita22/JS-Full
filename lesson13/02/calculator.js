export function getSquaredArray(arr) {
  return arr.map(el => el ** 2);
}

export function getOddNumbers(arr) {
  return arr.filter(el => el % 2 !== 0);
}

export default (a, b) => a + b;
