export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  function sendMessage(name) {
    console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`);
  }
  function setMessage(text) {
    message = text;
  }
  function setSender(sndr) {
    sender = sndr;
  }
  return {
    sendMessage,
    setMessage,
    setSender,
  };
}
