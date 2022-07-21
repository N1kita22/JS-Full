export function createButton(buttonText) {
  const newButton = document.createElement('button');
  newButton.textContent = buttonText;
  const body = document.querySelector('body');
  body.append(newButton);
}
console.log(createButton('+++++++++++++++'));
