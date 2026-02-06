document.addEventListener("DOMContentLoaded", async () => {
  const headerContainer = document.getElementById("header-container");
  if (!headerContainer) return;

  try {
    const res = await fetch("/components/header.html");
    const html = await res.text();
    headerContainer.innerHTML = html;

    // MENU LOGIC
    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    if (menuBtn && mobileNav) {
      menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
      });
    }
  } catch (e) {
    console.error("Header load failed", e);
  }
});
