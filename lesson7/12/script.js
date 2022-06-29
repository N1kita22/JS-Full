function arrAverage(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((acc, el) => acc + el) / arr.length;
}

console.log(arrAverage([1, 5, 6, 3]));
