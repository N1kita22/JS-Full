function increaseEvenEl(arr, delta) {
  if (!Array.isArray(arr)) return null;
  return arr.map(el => (el % 2 === 0 ? el + delta : (el = el)));
}
console.log(increaseEvenEl([1, 2, 3, 4, 5, 6], 3));
