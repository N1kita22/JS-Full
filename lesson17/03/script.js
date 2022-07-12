export function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
const user = {
  name: 'Tom',
  sayHi() {
    console.log(`${this.name} Hi!`);
  },
};
const deferredSay = defer(user.sayHi, 1000);

deferredSay.call({ name: 'Bob' });
