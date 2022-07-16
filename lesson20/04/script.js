export class Order {
  isConfirmed = false;
  dateCreated = new Date();
  dateConfirmed = Date;
  id = (Math.random() * (9999 - 91) + 999).toFixed();
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    if (this.price > 1000) {
      return true;
    }
    return false;
  }

  confirmOrder() {
    this.isConfirmed = true;
    this.dateConfirmed = new Date();
  }

  isValidType() {
    if (this.type == ('Buy' || this.type == 'Sell')) {
      return true;
    }
    return false;
  }
}
const order0 = new Order(1002, 'Singapor', 'Buy');
console.log(order0.confirmOrder());
const order1 = new Order(999, 'Singapor', 'Sell');
console.log(order1.checkPrice());
console.log(order1.dateCreated);
console.log(order1.confirmOrder());
console.log(order1.dateConfirmed);
console.log(order1);
