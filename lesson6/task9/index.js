const reverseArray = (arr) => {
  if (!Array.isArray(arr)) return null;
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = arr[arr.length - 1 - i];
  }
  return newArr;
};

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));
