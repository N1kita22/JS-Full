export function manageClasses() {
  const one = document.querySelector('.one');
  one.classList.add('selected');
  one.nextElementSibling.classList.toggle('selected');
  one.nextElementSibling.nextElementSibling.classList.toggle('three_done');
  if (
    one.nextElementSibling.nextElementSibling.nextElementSibling.classList.contains('some-class')
  ) {
    one.nextElementSibling.nextElementSibling.nextElementSibling.classList.add('another-class');
  }
  console.log(
    one.outerHTML,
    one.nextElementSibling.outerHTML,
    one.nextElementSibling.nextElementSibling.outerHTML,
    one.nextElementSibling.nextElementSibling.nextElementSibling.outerHTML,
  );
}
manageClasses();
