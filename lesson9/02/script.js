// Функция которая копирует обьект..
// Алгоритм тут будет лишним если знать верный метод ©
const Users = {
  Tom: 23,
  Nick: 30,
  Lev: 2022 - 1847,
};

const copyObj = obj => Object.assign({}, obj);

console.log(copyObj(Users));

console.log(Users === copyObj(Users));
