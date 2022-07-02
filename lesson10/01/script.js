const getFiniteNumbers = arr => arr.filter(el => Number.isFinite(el));

const getFiniteNumbersV2 = arr => arr.filter(el => isFinite(el));

const getNaN = arr => arr.filter(el => Number.isNaN(el));

const getNaNV2 = arr => arr.filter(el => isNaN(el));

const getIntegers = arr => arr.filter(el => Number.isInteger(el));

const arr1 = ['12', '17.7text', null, Infinity, NaN, 12, 555, 12.23];
console.log(getFiniteNumbers(arr1));
console.log(getFiniteNumbersV2(arr1));
console.log(getNaN(arr1));
console.log(getNaNV2(arr1));
console.log(getIntegers(arr1));
