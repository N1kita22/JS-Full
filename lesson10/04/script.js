// 'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = arr => {
  if (arr.length <= 0 || !Array.isArray(arr)) return null;
  const moduleNums = arr.map(el => Math.abs(el));
  return Math.max(...moduleNums);
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10])); // ===> 10
console.log(getMaxAbsoluteNumber([2.1, 0, 1.6])); // ===> 2.1
console.log(getMaxAbsoluteNumber([-6, 3, 5, -1])); // ===> 6
console.log(getMaxAbsoluteNumber([3, -1, -777, 45, -20])); // ===> 777
console.log(getMaxAbsoluteNumber([]));
console.log(getMaxAbsoluteNumber(true));
