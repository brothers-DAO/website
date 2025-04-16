const menuBtn = document.getElementById("menuBtn");
const menuIcon = document.getElementById("menuIcon");
const menuOverlay = document.getElementById("menuOverlay");
const menuBackdrop = document.getElementById("menuBackdrop");

function toggleMenu() {
  const isOpen = menuOverlay.classList.toggle("open");
  menuBackdrop.classList.toggle("show");

  // Toggle between hamburger and X
  if (isOpen) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
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
