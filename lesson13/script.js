const calc = expression => {
  const [a, oper, b] = expression.split(' ');
  let result;
  // eslint-disable-next-line default-case
  switch (oper) {
    case '+':
      result = Number(a) + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }
  return `${expression} = ${result}`;
};

console.log(calc('1 + 2'));
console.log(calc('1 - 2'));
console.log(calc('1 * 2'));
console.log(calc('1 / 2'));
