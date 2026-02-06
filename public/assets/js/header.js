// =====================================
// Develac – Global Header Loader
// File: /assets/js/header.js
// =====================================

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("header-container");

  if (!container) return;

  try {
    const response = await fetch("/components/header.html");
    const html = await response.text();

    // Inject header
    container.innerHTML = html;

    // MENU LOGIC
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
      });
    }

    // BACK BUTTON LOGIC
    const backBtn = document.getElementById("backBtn");
    const path = window.location.pathname;

    if (backBtn) {
      // Hide on home page
      if (path === "/" || path.endsWith("/index.html")) {
        backBtn.style.display = "none";
      } else {
        backBtn.addEventListener("click", () => {
          window.history.back();
        });
      }
    }

  } catch (error) {
    console.error("Failed to load header:", error);
  }
});
