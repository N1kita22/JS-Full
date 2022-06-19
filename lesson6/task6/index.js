const squareArray = (arr) => {
  let newArr = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let el of arr) {
    newArr.push(el ** 2);
  }
  return newArr;
};
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
