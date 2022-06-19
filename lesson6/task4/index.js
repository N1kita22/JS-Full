'use strict';

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const [start, ...rest] = numbers;
  return [...rest, start];
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  let arrManual = [];
  let end = numbers[0];
  for (let el of numbers) {
    arrManual.push(el);
  }
  arrManual.shift();
  arrManual.push(end);
  return arrManual;
}

// examples
swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
