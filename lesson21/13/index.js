export function getSection(num) {
  const span = document.querySelector(`span[data-number="${num}"]`);
  return span.parentElement.dataset.section;
}
console.log(getSection(4));
