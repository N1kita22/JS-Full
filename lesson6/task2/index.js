'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
function getSum(arr) {
  let accum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (!Array.isArray(arr)) {
      return null;
    }
    accum += arr[i];
  }
  return accum;
}

// examples
console.log(getSum([1, 10, -10, 4])); // ==> 5
getSum([1]); // ==> 1
getSum([-8, 8]); // ==> 0
getSum(10, 12, 14); // ==> null
