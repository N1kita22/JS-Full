/* Пишем функцию по нахождению колличества подстрок
в строке */

const countOccurrences = (text, str = '') => {
  if (str !== String(str)) return null;
  if (str === '') {
    return null;
  }
  return text.split(str).length - 1;
};

console.log(countOccurrences('this text is text', 'te'));
console.log(countOccurrences('this text is text'));
