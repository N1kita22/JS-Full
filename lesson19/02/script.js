export function getOwnProps(obj) {
  const arr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }
  return arr.filter(el => typeof obj[el] !== 'function');
}
const obj1 = {
  key1: 'val',
  key2: 'val',
  key3: 'val',
  func() {
    return 'Oops, this text should be hidden.';
  },
};
console.log(getOwnProps(obj1));

// export function getOwnProps(obj) {
//   return Object.keys(obj);
// }

// export function getOwnProps(obj) {
// const arr = [];
// for (let prop in obj) {
//   if (obj.hasOwnProperty(prop)) {
//     arr.push(prop);
//   }
// }
// return arr;
// }
