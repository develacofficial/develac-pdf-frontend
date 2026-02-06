// =====================================
// Develac – Global Header Loader
// File: /assets/js/header.js
// Responsibility:
// - Load header.html on every page
// - Bind mobile menu toggle
// =====================================

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("header-container");

  // Safety check
  if (!container) return;

  try {
    const response = await fetch("/components/header.html");
    const html = await response.text();

    // Inject header
    container.innerHTML = html;

    // Menu logic
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
      });
    }
  } catch (error) {
    console.error("Failed to load header:", error);
  }
});
