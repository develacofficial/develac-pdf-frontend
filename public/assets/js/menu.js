/* ==================================
   GLOBAL MENU CONTROLLER
================================== */

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  // Safety check (very important)
  if (!menuBtn || !mobileNav) {
    console.warn("Menu button or mobile nav not found");
    return;
  }

  // Toggle menu
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  // Close menu on link click (mobile UX)
  const navLinks = mobileNav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
    });
  });
});
