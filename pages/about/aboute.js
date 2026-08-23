
// LETTER LENGTH COUNTER
const textarea = document.querySelector(".textarea");
const counter = document.querySelector(".counter");

textarea.addEventListener('input', () => {
  counter.textContent = textarea.value.length;
})