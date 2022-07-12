export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(name) {
    const splitName = name.split(' ');
    [this.firstName, this.lastName] = splitName;
  },
};
user.getFullName();
user.setFullName('Gon Don');
console.log(user);
