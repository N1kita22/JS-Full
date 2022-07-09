let message = 'Just learn it';
function sendMessage(name) {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}! Your ${sender}`);
}

function setMessage(text) {
  message = text;
}

console.log(sendMessage('Tom'));
console.log(setMessage('Good job'));
console.log(sendMessage('Tom'));
