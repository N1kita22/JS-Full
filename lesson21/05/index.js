export const setTitle = text => {
  const newText = document.querySelector('.title');
  newText.textContent = text;
  return newText;
};

console.log(setTitle('Yahhooo!'));
