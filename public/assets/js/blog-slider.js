document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".home-blog-scroll");
  if (!slider) return;

  let autoScroll;
  let isUserInteracting = false;

  function startAutoScroll() {
    autoScroll = setInterval(() => {
      if (isUserInteracting) return;

      slider.scrollLeft += 1;

      // loop back smoothly
      if (
        slider.scrollLeft + slider.clientWidth >=
        slider.scrollWidth - 1
      ) {
        slider.scrollLeft = 0;
      }
    }, 20);
  }

  function stopAutoScroll() {
    isUserInteracting = true;
    clearInterval(autoScroll);
  }

  slider.addEventListener("touchstart", stopAutoScroll, { passive: true });
  slider.addEventListener("mousedown", stopAutoScroll);

  startAutoScroll();
});
