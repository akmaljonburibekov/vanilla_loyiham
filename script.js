
// INCREASE AND DECREASE

const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const counterResult = document.querySelector(".counterResult");

let number = 0;

function updateCounter() {
  counterResult.textContent = number;

  decrease.disabled = number === 0;
  reset.disabled = number === 0;
}

increase.addEventListener('click', () => {
  number++;
  updateCounter();
})

decrease.addEventListener('click', () => {
  number--;
  updateCounter();
})

reset.addEventListener('click', () => {
  number = 0;
  updateCounter();
})