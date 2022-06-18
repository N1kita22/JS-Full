const increaser = (a, index) => {
  if (a > index) {
    return a + index;
  } else if (a <= index) {
    return a;
  }
};
console.log(increaser(2, 8));
