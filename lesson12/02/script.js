const reverseString = str => {
  if (str !== String(str)) return null;
  return str.split('').reverse().join('');
};
const text = 'String';

console.log(reverseString(text));
