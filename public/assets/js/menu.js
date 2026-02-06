document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });
});
