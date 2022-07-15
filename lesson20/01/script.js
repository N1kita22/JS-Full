export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    if (age < 0) {
      return null;
    }
    if (age >= 25) {
      this.age = age;
      this.requestNewPhoto();
    }
    if (age >= 0) {
      return age;
    }
    return this.age;
  }

  static createEmpty() {
    const user = new User('', null);
    return user;
  }
}
const u1 = new User('Ven', 23);
const u2 = new User('Boris', 44);

console.log(u1);
const u3 = User.createEmpty();
console.log(u3);
