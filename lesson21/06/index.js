export const setButton = buttonText => {
  const newButton = document.querySelector('body');
  newButton.innerHTML = `<button>${buttonText}</button>`;
  console.log(newButton.outerHTML);
};
setButton('Look Dude. Its working!');
