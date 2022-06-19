const checker = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  let min = Math.min.apply(null, arr);
  let max = Math.max.apply(null, arr);
  if (max + min > 1000) {
    return true;
  } else {
    return false;
  }
};
// console.log(checker([1788, 2300, 444, 565, 665, 2988]));
