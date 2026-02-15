// =======================================
// Develac – Tools Status Config
// =======================================

const TOOLS_STATUS = {
  compress: "live",
  merge: "soon",
  split: "soon",
  pdfToImage: "soon",
  imageToPdf: "soon",
  pdfToWord: "soon"
};

// Apply logic after DOM load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-tool]").forEach(card => {
    const toolKey = card.dataset.tool;
    const status = TOOLS_STATUS[toolKey];

    if (status !== "live") {
      card.classList.add("coming-soon");

      // Remove link if exists
      if (card.tagName === "A") {
        const div = document.createElement("div");
        div.className = card.className;
        div.dataset.tool = toolKey;
        div.innerHTML = card.innerHTML;
        card.replaceWith(div);
        card = div;
      }

      // Add badge
      const badge = document.createElement("span");
      badge.className = "soon-badge";
      badge.innerText = "Coming Soon";
      card.appendChild(badge);
    }
  });
});
