function getAdults(objUsers) {
  return Object.entries(objUsers)
    .filter(name => name[1] >= 18)
    .map(name => name[0]);
}

// Test data
const Users = {
  Tom: 17,
  Mo: 19,
  Dyu: 19,
};

const emptyUsers = {};

console.log(getAdults(Users));
console.log(getAdults(emptyUsers));
