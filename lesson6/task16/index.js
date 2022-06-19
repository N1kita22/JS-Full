const removeDuplicates = (arr) => {
  if (!Array.isArray(arr) && arr.length > 0) {
    return null;
  }
  let nArr = [...new Set(arr)];
  return nArr;
};

console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 6, 6]));
