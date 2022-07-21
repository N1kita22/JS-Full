export const getItemsList = () => {
  const list = [...document.querySelectorAll('.technology')];
  const textList = list.map(el => {
    return el.textContent;
  });
  console.dir(textList);
  return textList;
};

export const getItemsArray = () => {
  const textList = Array.from(document.querySelectorAll('.tool')).map(el => {
    return el.textContent;
  });
  console.dir(textList);
  return textList;
};
