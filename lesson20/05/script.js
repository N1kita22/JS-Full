/* eslint-disable max-classes-per-file */

export class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }

  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.reduce((acc, el) => {
      acc.push(el.name);
      return acc;
    }, []);
  }

  getUserIds() {
    return this._users.reduce((acc, el) => {
      acc.push(el.id);
      return acc;
    }, []);
  }

  getUserNameById(id) {
    return this._users.reduce((acc, el) => {
      if (el.id === id) {
        acc = el.name;
      }
      return acc;
    }, '');
  }
}

// examples
const user0 = new User('1', 'Tom', 'session-id0');
const user1 = new User('2', 'Jery', 'session-id1');
const user2 = new User('3', 'Rick', 'session-id2');
const user3 = new User('4', 'Morty', 'session-id3');

// получить свойства можем
console.log(user0.id); // ===> '1'
console.log(user1.name); // ===> 'Tom'
console.log(user0.sessionId); // ===> 'session-id'

// но изменить эти свойства нельзя
// user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user0.name); // ===> 'Tom' - но изменение проигнорировано, так как setter отсутствует
const arrUsers = new UserRepository([user0, user1, user2, user3]);
console.log(arrUsers.getUserNameById(3));
console.log(arrUsers.users);
// console.log(arrUsers.getUserNames());
