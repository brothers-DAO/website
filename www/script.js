const menuBtn = document.getElementById("menuBtn");
const menuOverlay = document.getElementById("menuOverlay");
const menuBackdrop = document.getElementById("menuBackdrop");

function toggleMenu() {
  menuOverlay.classList.toggle("open");
  menuBackdrop.classList.toggle("show");
  menuBtn.textContent = menuOverlay.classList.contains("open") ? "✖" : "☰";
}

menuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

menuBackdrop.addEventListener("click", () => {
  toggleMenu();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuOverlay.classList.contains("open")) {
    toggleMenu();
  }
});
