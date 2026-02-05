// ===============================
// Develac – Compress PDF (Fake Logic)
// Step-14.1
// ===============================

const fileInput = document.getElementById("pdfInput");
const uploadBox = document.getElementById("uploadBox");
const progressBox = document.getElementById("progressBox");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const successBox = document.getElementById("successBox");

const originalSizeEl = document.getElementById("originalSize");
const compressedSizeEl = document.getElementById("compressedSize");
const savedTextEl = document.getElementById("savedText");

const downloadBtn = document.getElementById("downloadBtn");
const resetBtn = document.getElementById("resetBtn");

// State
let currentFile = null;

// ===============================
// Helpers
// ===============================
function formatSize(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

function resetUI() {
  progressBar.style.width = "0%";
  progressText.innerText = "";
  progressBox.style.display = "none";
  successBox.style.display = "none";
  uploadBox.style.display = "block";
  fileInput.value = "";
}

// ===============================
// Fake Compress Flow
// ===============================
fileInput.addEventListener("change", () => {
  if (!fileInput.files.length) return;

  currentFile = fileInput.files[0];

  // Switch UI
  uploadBox.style.display = "none";
  progressBox.style.display = "block";
  successBox.style.display = "none";

  startFakeProcessing();
});

function startFakeProcessing() {
  let progress = 0;
  progressText.innerText = "Uploading file...";

  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 5;
    if (progress >= 100) progress = 100;

    progressBar.style.width = progress + "%";

    if (progress < 40) {
      progressText.innerText = "Uploading file...";
    } else if (progress < 75) {
      progressText.innerText = "Analyzing PDF...";
    } else if (progress < 100) {
      progressText.innerText = "Optimizing file...";
    } else {
      progressText.innerText = "Completed";
      clearInterval(interval);
      setTimeout(showSuccess, 500);
    }
  }, 400);
}

// ===============================
// Success Data Logic
// ===============================
function showSuccess() {
  progressBox.style.display = "none";
  successBox.style.display = "block";

  const originalBytes = currentFile.size;

  // Fake compression: 35–65% reduction
  const reductionPercent = Math.floor(Math.random() * 30) + 35;
  const compressedBytes =
    originalBytes - Math.floor((originalBytes * reductionPercent) / 100);

  const savedPercent = Math.round(
    ((originalBytes - compressedBytes) / originalBytes) * 100
  );

  // Bind data
  originalSizeEl.innerText = formatSize(originalBytes);
  compressedSizeEl.innerText = formatSize(compressedBytes);
  savedTextEl.innerText =
    "Saved " + savedPercent + "% · " +
    formatSize(originalBytes - compressedBytes) + " reduced";

  // Fake download
  downloadBtn.onclick = () => {
    alert("Fake download completed (backend will be added later)");
  };
}

// ===============================
// Reset
// ===============================
resetBtn.addEventListener("click", () => {
  resetUI();
});
