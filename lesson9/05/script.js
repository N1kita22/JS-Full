rooms = {
  room1: [{ name: 'Borya' }, { name: 'Ivan' }, { name: 'Ivan' }, ,],
  room2: [{ name: 'Don' }, { name: 'Tom' }, { name: 'Bill' }, ,],
  room3: [{ name: 'Ann' }, { name: 'Ulya' }, { name: 'Meg' }, ,],
};

const getPeople = obj => {
  const arr = Object.entries(obj)
    .flat(2)
    .filter(element => element.name)
    .reduce((acc, item) => {
      acc.push(item.name);
      return acc;
    }, []);
  return arr;
};

console.log(getPeople(rooms));
