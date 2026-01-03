document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const closeBtn = document.querySelector(".close-menu");

  toggle.addEventListener("click", () => {
    navMenu.classList.add("show"); // always open
  });

  closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show"); // always close
  });
});