export function squaredNumbers() {
  const Elem = document.querySelectorAll('.number');
  Elem.forEach(el => {
    el.dataset.squaredNumber = el.dataset.number ** 2;
    // console.log(el.dataset.squaredNumber);
  });
}
squaredNumbers();
