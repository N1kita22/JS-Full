const transformToObject = arr => {
  if (arr == null) return {};
  const obj = {};
  arr.forEach(element => {
    obj[element] = element;
  });
  return obj;
};

// examples
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
