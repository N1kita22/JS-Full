export const wallet = {
  transactions: [23, 43, 43, 54, 656, 3, 54],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};
console.log(wallet.getMax());
console.log(wallet.getMin());
