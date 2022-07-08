/*
  input: Array
  output: Number

  1. Return null if Array is emp\t\y
  2. Reduce(Math.abs use it) is best method (or not) 
  3. return number
  */

export default function (arr) {
  if (!Array.isArray(arr) || arr.length == 0) return null;
  return arr.reduce((acc, el) => {
    acc = Math.abs(acc);
    if (acc > Math.abs(el)) {
      acc = el ** 2;
    }
    return acc;
  });
}
