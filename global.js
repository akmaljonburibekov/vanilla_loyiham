
const teamToggle = document.querySelector(".teamToggle");

const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const navbarToggle = document.querySelector(".navbarToggle");


teamToggle.addEventListener('click', () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    teamToggle.textContent = "☀️";
  } else {
    teamToggle.textContent = "🌙"
  }
})

hamburger.addEventListener('click', () => {
  navbar.classList.toggle("active");
})
