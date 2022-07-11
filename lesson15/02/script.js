export const createCalculator = () => {
  let number = 0;
  const obj = {
    add(num) {
      number += num;
    },
    decrease(num) {
      number -= num;
    },
    reset() {
      number = 0;
    },
    getMemo() {
      return number;
    },
  };
  return obj;
};
const cal1 = createCalculator();
console.log(cal1);
cal1.getMemo();
cal1.add(2);
console.log(cal1.getMemo());
