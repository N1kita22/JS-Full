const withdraw = (clients, balances, client, amount) => {
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
console.log(withdraw(['Ann', 'Jo', 'u'], [100, 60, 30], 'u', 50));
