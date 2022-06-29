function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;
  const copyArr = [...arr];
  return copyArr.reverse();
}
console.log(reverseArray([1, 2, 3, 4, 5, 6]));
