export function finishList() {
  const list = document.querySelector('.list');
  const listItem1 = document.createElement('li');
  const listItem8 = document.createElement('li');
  const listItem4 = document.createElement('li');
  const listItem6 = document.createElement('li');
  listItem1.textContent = 1;
  listItem8.textContent = 8;
  listItem4.textContent = 4;
  listItem6.textContent = 6;
  const specItem = document.querySelector('.special');
  list.prepend(listItem1);
  list.append(listItem8);
  specItem.before(listItem4);
  specItem.after(listItem6);
}
console.log(finishList());
