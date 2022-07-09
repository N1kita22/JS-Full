export const reverseArray = arr => {
  if (!Array.isArray(arr)) return null;
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr[i] = arr[arr.length - 1 - i];
  }
  return newArr;
};

export const withdraw = (clients, balances, client, amount) => {
  let result = 0;
  let index = 0;
  for (let i of clients) {
    if (i == client) {
      index = clients.indexOf(client);
    }
  }
  result = balances[index] - amount;
  if (result > 0) {
    return result;
  } else {
    return -1;
  }
};

export const getAdults = obj => {
  const nObj = {};
  for (let value in obj) {
    if (obj[value] >= 18) {
      nObj[value] = obj[value];
    }
  }
  return nObj;
};
