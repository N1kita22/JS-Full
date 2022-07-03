const arr1 = [19.7, 22.3, '34.7', 12, 12.8, -18.6, NaN, '12', 'Tom'];

const getParsedIntegers = arr => arr.map(el => Number.parseInt(el));

const getParsedIntegersV2 = arr => arr.map(el => parseInt(el));

const getParsedFloats = arr => arr.map(el => Number.parseFloat(el));

const getParsedFloatsV2 = arr => arr.map(el => parseFloat(el));

console.log(getParsedIntegers(arr1));
console.log(getParsedIntegersV2(arr1));
console.log(getParsedFloats(arr1));
console.log(getParsedFloatsV2(arr1));
