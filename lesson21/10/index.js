export function finishForm() {
  const form = document.querySelector('.login-form');
  const inputLogin = document.createElement('input');
  inputLogin.setAttribute('type', 'text');
  inputLogin.setAttribute('name', 'login');
  form.lastElementChild.setAttribute('type', 'password');
  form.prepend(inputLogin);
  console.log(form.innerHTML);
}
finishForm();
