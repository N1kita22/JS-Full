export const getItemsList = () => {
  const list = document.querySelectorAll('.technology');
  console.dir(list);
  return list;
};

export const getItemsArray = () => {
  const list = Array.from(document.querySelectorAll('.tool'));
  console.dir(list);
  return list;
};
