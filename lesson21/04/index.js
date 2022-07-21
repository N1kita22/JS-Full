export const getTitle = () => {
  return document.querySelector('.title').textContent;
};

export const getDescription = () => {
  return document.querySelector('.about').innerText;
};

export const getPlans = () => {
  return document.querySelector('.plans').innerHTML;
};

export const getGoal = () => {
  return document.querySelector('.goal').outerHTML;
};
console.log(getTitle());
console.dir(getDescription());
console.log(getPlans());
console.log(getGoals());
