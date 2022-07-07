// Split Text

//splitString('abcd efgh', 4) => 'Abcd efgh\n'

function splitText(text, num = 10) {
  if (text !== String(text)) return null;
  const strArr = [];
  let start = 0;
  while (true) {
    const chunk = text.substr(start, num);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    start += num;
  }
  return strArr.join('\n');
}

console.log(splitText('abcdefg', 4));
console.log(splitText('abcdefgfgfdergddee'));
