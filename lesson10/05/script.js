const arr1 = [12.23554, 13.6654467, 146.46654];
const getTotalPrice = arr => Math.floor(arr.reduce((acc, el) => (acc += el), 0) * 100) / 100;

console.log(getTotalPrice(arr1));
