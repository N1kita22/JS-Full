export const event = {
  guests: [
    {
      name: 'Nyx',
      age: 18,
      email: 'example@server',
    },
    {
      name: 'Meepo',
      age: 16,
      email: 'meepo@server',
    },
    {
      name: 'Dazzle',
      age: 20,
      email: 'dazzle@server',
    },
    {
      name: 'Axe',
      age: 23,
      email: 'Axe@server',
    },
  ],
  message: 'Welcome to the party!',

  getInvitations(arr = this.guests) {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({ email, message: `Dear ${name}! ${this.message}` }));
  },
};
console.log(event.getInvitations());
