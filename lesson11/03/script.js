// Split снова ты тут..

/* algo
input: string, number
output: array

1. Разбиваем строку на указанное кол. подстрок
2. Заполняем последнюю строку точками до указанной длинны
3. Вернуть массив подстрок или null если 1й аргумент не строка. */

function splitString(str, num = 10) {
  if (str !== String(str)) return null;
  const strArr = [];
  let start = 0;
  while (true) {
    const chunk = str.substr(start, num);
    if (chunk.length === 0) break;

    strArr.push(chunk.padEnd(num, '.'));
    start += num;
  }
  return strArr;
}

console.log(splitString('abcdefg', 4));
console.log(splitString('abcdefgfgfdergddee'));
