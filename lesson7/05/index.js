const squareArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  // return arr.reduce((acc, el) => {
  //   return acc.concat(el**2);
  // }, []);

  // arr.forEach(el => nArr.push(el ** 2));
  // return nArr;

  return arr.map(el => el ** 2);
};
const arr1 = [1, 2, 3, 4, 5, 6];
console.log(squareArray(arr1));
