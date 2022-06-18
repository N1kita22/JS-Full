function sum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  let firstSum = sum(firstFrom, firstTo);
  let secondSum = sum(secondFrom, secondTo);
  if (firstSum > secondSum) {
    return true;
  } else {
    return false;
  }
}
