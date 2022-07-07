/*
                      cleanTransactionsList

 Функция для очистки данных ||| Function for cleaning data
 
 input: Array
 output: Array

 1. Фильтрация массива от символов(оставляем только числа)
 2. Обрезаем пробелы
 3. Добавить символ $ к каждому элементу
 4. Вернуть новый массив строк
 */

const cleanTransactionsList = arr => {
  if (!Array.isArray(arr)) return null;
  const nArr = arr
    .filter(el => isFinite(el))
    .map(el => {
      el = Number(el).toFixed(2);
      el = '$' + el;
      return el;
    });
  return nArr;
};

const testArr = [1, 'ds12 ', 2, 4, 14.3, ' 34', 15.8, 'afa'];
console.log(cleanTransactionsList(testArr));
