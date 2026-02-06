document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");
  const backBtn = document.getElementById("backBtn");

  /* ===== MENU TOGGLE ===== */
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
    });
  }

  /* ===== BACK BUTTON LOGIC ===== */
  if (backBtn) {
    const path = window.location.pathname;

    // Home page par back button hide
    if (path === "/" || path.endsWith("/index.html")) {
      backBtn.classList.add("hidden");
    }

    backBtn.addEventListener("click", () => {
      window.history.back();
    });
  }
});
