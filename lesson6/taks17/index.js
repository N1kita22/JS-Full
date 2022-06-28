const uniqueCount = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const nArr = [...new Set(arr)];

  return nArr.length;
};
console.log(uniqueCount([1, 1, 2, 3, 3, 4]));
