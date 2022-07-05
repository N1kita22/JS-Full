'use strict';

/**
 * @param {number} num
 * @param {number} prec
 * @return {number[]}
 */

// 1. Создать массив длинной 5.
// Обработать элемент согласно условию
const superRound = (num, prec) => {
  const arr = [
    Math.floor(num * 10 ** prec) / 10 ** prec,
    Math.trunc(num * 10 ** prec) / 10 ** prec,
    Math.ceil(num * 10 ** prec) / 10 ** prec,
    Math.round(num * 10 ** prec) / 10 ** prec,
    +num.toFixed(prec),
  ];
  return arr;
};

// examples
console.log(superRound(11.12556, 2)); // ==> [11.12, 11.12, 11.13, 11.13, 11.13]
console.log(superRound(6.11, 3)); // ==> [6.11, 6.11, 6.11, 6.11, 6.11]
console.log(superRound(-11.12556, 2)); // ==> [-11.12, -11.13, -11.13, -11.12, -11.13]
