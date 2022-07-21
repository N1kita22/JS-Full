export const getTitleElement = () => {
  const titleElem = document.querySelector('.title');
  console.dir(titleElem);
};

export const getInputElement = () => {
  const inputElem = document.querySelector('.task-input');
  console.dir(inputElem);
  return inputElem;
};
getInputElement();
