export function User(name, age) {
  this.name = name;
  this.age = age;
  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };
  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  };
  User.prototype.setAge = function (age) {
    if (age < 0) {
      return false;
    }
    this.age = age;
    if (age >= 25) {
      this.requestNewPhoto();
    }
    if (age >= 0) {
      return age;
    }
    return age;
  };
}
const u1 = new User('Tom', 34);
const u2 = new User('Bob', 24);
console.log(u1);
u1.sayHi();
u2.setAge(35);
console.log(u1);
u1.setAge(30);
