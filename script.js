
// INCREASE AND DECREASE

const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const counterResult = document.querySelector(".counterResult");

let number = 0;

increase.addEventListener('click', () => {
  number++;
  counterResult.textContent = number;
})

decrease.addEventListener('click', () => {
  number--;
  counterResult.textContent = number;
})

reset.addEventListener('click', () => {
  number = 0;
  counterResult.textContent = number;
})