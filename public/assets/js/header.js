document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("global-header");

  if (!headerContainer) return;

  fetch("/components/header.html")
    .then(res => res.text())
    .then(html => {
      headerContainer.innerHTML = html;

      // MENU
      const menuBtn = document.getElementById("menuBtn");
      const mobileNav = document.getElementById("mobileNav");

      if (menuBtn && mobileNav) {
        menuBtn.addEventListener("click", () => {
          mobileNav.classList.toggle("open");
        });
      }

      // BACK BUTTON
      const backBtn = document.getElementById("backBtn");
      const path = window.location.pathname;

      if (backBtn) {
        if (path === "/" || path.endsWith("/index.html")) {
          backBtn.style.display = "none";
        }

        backBtn.addEventListener("click", () => {
          window.history.back();
        });
      }
    })
    .catch(err => {
      console.error("Header load failed", err);
    });
});
