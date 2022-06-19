const increaseEvenEl = (arr, delta) => {
  const nArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let el of arr) {
    if (el % 2 == 0) {
      nArr.push(el + delta);
    } else {
      nArr.push(el);
    }
  }
  return nArr;
};
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));
