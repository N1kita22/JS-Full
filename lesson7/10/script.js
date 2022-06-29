function sum(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, el) => {
    return (acc += el);
  }, 0);
}

console.log(sum([1, 2, 4, 5, 6, 6, 7, 8]));
