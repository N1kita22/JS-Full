export class Wallet {
  constructor() {
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(num) {
    this._balance += num;
  }

  withdraw(num) {
    if (num > this._balance) {
      console.log('No enough funds');
      return;
    }
    this._balance -= num;
  }
}

const wall = new Wallet();
wall.deposit(15);
wall.withdraw(19);
console.log(wall);
