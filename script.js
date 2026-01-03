// Wait until the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const panel = document.getElementById("sidePanel");
  const panelLinks = document.querySelectorAll("#sidePanel a");
  const closeBtn = document.getElementById("closeBtn");

  // Close panel when ✖ button is clicked
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      closePanel();
    });
  }

  // Close panel when any link inside it is clicked
  panelLinks.forEach(link => {
    link.addEventListener("click", () => {
      closePanel();
    });
  });
});

function openPanel() {
  document.getElementById("sidePanel").classList.add("open");
  document.getElementById("overlay").classList.add("show");
}

function closePanel() {
  document.getElementById("sidePanel").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}