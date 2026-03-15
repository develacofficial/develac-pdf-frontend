// =======================================
// Develac – Tools Status Config (SAFE)
// =======================================

const TOOLS_STATUS = {
  compress: "live",
  merge: "live",
  split: "soon",
  pdfToImage: "soon",
  imageToPdf: "soon",
  pdfToWord: "soon"
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-tool]").forEach(card => {
    const toolKey = card.dataset.tool;
    const status = TOOLS_STATUS[toolKey];

    if (status !== "live") {
      card.classList.add("coming-soon");

      // 🔒 Block navigation safely
      card.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
      });

      // 🏷️ Badge
      const badge = document.createElement("span");
      badge.className = "soon-badge";
      badge.innerText = "Coming Soon";
      card.appendChild(badge);
    }
  });
});
