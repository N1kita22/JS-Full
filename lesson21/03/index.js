export const getItemsList = () => {
  const list = [...document.querySelectorAll('.technology')];
  console.dir(list);
  return [...document.querySelectorAll('.technology')];
};

export const getItemsArray = () => {
  console.dir(Array.from(document.querySelectorAll('.tool')));
  return Array.from(document.querySelectorAll('.tool'));
};

getItemsList();
getItemsArray();
