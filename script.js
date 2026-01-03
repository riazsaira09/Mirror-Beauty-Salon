document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  const closeBtn = document.querySelector(".close-menu");
  const panelLinks = document.querySelectorAll("#sidePanel a");

  // Mobile nav toggle
  if (toggle) {
    toggle.addEventListener("click", () => {
      navMenu.classList.add("show");
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  }

  // Close side panel when a link is clicked
  panelLinks.forEach(link => {
    link.addEventListener("click", () => {
      closePanel();
    });
  });
});

// Side panel functions
function openPanel() {
  document.getElementById("sidePanel").classList.add("open");
}
function closePanel() {
  document.getElementById("sidePanel").classList.remove("open");
}