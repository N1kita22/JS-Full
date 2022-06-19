const checkSum = (arr) => {
  let check = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i of arr) {
    check += i;
  }
  if (check > 100) return true;
  else return false;
};
console.log(checkSum([10, 99, 1])); // ===> false
