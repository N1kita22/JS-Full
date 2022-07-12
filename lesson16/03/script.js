function createArrayOfFunctions(num) {
  const arr = [];
  if (num === undefined) {
    return arr;
  }
  if (!isFinite(num)) {
    return null;
  }
  arr.length = num;

  for (let i = 0; i < arr.length; i += 1) {
    arr[i] = function () {
      return i;
    };
  }

  return arr;
}
console.log(createArrayOfFunctions(3));
const arr1 = createArrayOfFunctions(2);
console.log(arr1);
