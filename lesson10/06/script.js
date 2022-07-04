const getRandomNumbers = (length, from, to) => {
  const arr = [];

  for (let el = 0; el < length; el += 1) {
    arr.push(+(Math.random() * (Math.floor(to) - Math.ceil(from)) + Math.ceil(from)).toFixed());
  }
  if ((from || to) < 1) {
    return null;
  }
  return arr;
};

console.log(getRandomNumbers(5, 0.4, 0.9)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));

// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 2, 2, 2, 2]
// getRandomNumbers(5, 1.4, 3.22); // ==> [3, 3, 2, 3, 2]
