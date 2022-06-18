const getSum = (firstNum, secondNum) => {
  let sum = 0;
  for (let i = firstNum; i <= secondNum; i += 1) {
    if (i % 2 == 0) {
      sum += i;
    }
  }
  return sum;
};
// console.log(getSum(2, 18));
