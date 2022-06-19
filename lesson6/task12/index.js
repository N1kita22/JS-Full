const sortAsc = (array) => {
  for (let i = 0, endI = array.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return array;
};
const sortDesc = (array) => {
  for (let i = 0, endI = array.length - 1; i < endI; i++) {
    let wasSwap = false;
    for (let j = 0, endJ = endI - i; j < endJ; j++) {
      if (array[j] < array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        wasSwap = true;
      }
    }
    if (!wasSwap) break;
  }
  return array;
};

console.log(sortAsc([1, 5, 7, 3, 8, 4, 9, 2]));
console.log(sortDesc([1, 5, 7, 3, 8, 4, 9, 2]));
