export const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

export const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  __proto__: vehicle,
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

ship.startMachine();
ship.stopMachine();
