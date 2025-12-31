/* ======================================================
   💖 GLOBAL VARIABLES
====================================================== */

const pages = document.querySelectorAll(".page");
let currentPage = 0;

/* ======================================================
   🎵 BACKGROUND MUSIC (FIXED & BROWSER-SAFE)
====================================================== */

const bgMusic = document.getElementById("bgMusic");
const muteToggle = document.getElementById("muteToggle");

let musicStarted = false;
let muted = false;

// Start music ONLY after real user interaction
function startMusic() {
  if (!musicStarted && !muted) {
    bgMusic.volume = 0.4;
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

// Listen for ALL safe interaction types
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);
document.addEventListener("keydown", startMusic);

// Mute / Unmute
muteToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  muted = !muted;
  bgMusic.muted = muted;
  muteToggle.textContent = muted ? "🔇" : "🔊";
});

/* ======================================================
   📄 PAGE NAVIGATION
====================================================== */

function showPage(index) {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
  currentPage = index;
}

function nextPage() {
  if (currentPage < pages.length - 1) {
    showPage(currentPage + 1);
  }
}

function goHome() {
  showPage(0);
}

/* ======================================================
   🤗 PAGE 1 — CLICK FOR A HUG
====================================================== */

const hugBtn = document.getElementById("hugBtn");

hugBtn.addEventListener("click", () => {
  spawnHearts(25);
  bounceMascot();
});

/* ======================================================
   💌 PAGE 2 — LOVE REASONS REVEAL
====================================================== */

document.querySelectorAll(".reason").forEach(reason => {
  reason.addEventListener("click", () => {
    reason.classList.add("revealed");
  });
});

/* ======================================================
   🧸 PAGE 3 — MEMORY TOOLTIP
====================================================== */

document.querySelectorAll(".memory").forEach(memory => {
  memory.addEventListener("click", () => {
    const caption = memory.querySelector(".caption");
    caption.classList.toggle("show");
  });
});

/* ======================================================
   🌼 PAGE 4 — MAKE A WISH
====================================================== */

const wishBtn = document.getElementById("wishBtn");

wishBtn.addEventListener("click", () => {
  scatterSparkles();
  setTimeout(() => nextPage(), 1500);
});

/* ======================================================
   🎆 PAGE 5 — CONFETTI & FIREWORKS
====================================================== */

const finalePage = document.getElementById("page5");

finalePage.addEventListener("click", (e) => {
  createFirework(e.clientX, e.clientY);
});

/* ======================================================
   🐰 MASCOT INTERACTION
====================================================== */

const mascot = document.getElementById("mascot");

function bounceMascot() {
  mascot.classList.add("bounce");
  setTimeout(() => mascot.classList.remove("bounce"), 600);
}

/* ======================================================
   💕 HEART SPAWNER
====================================================== */

function spawnHearts(count = 10) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
}

/* ======================================================
   ✨ SPARKLES (WISH EFFECT)
====================================================== */

function scatterSparkles() {
  for (let i = 0; i < 30; i++) {
    const spark = document.createElement("div");
    spark.className = "sparkle";
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(spark);

    setTimeout(() => spark.remove(), 2000);
  }
}

/* ======================================================
   🎇 FIREWORKS (FINAL PAGE)
====================================================== */

function createFirework(x, y) {
  const firework = document.createElement("div");
  firework.className = "firework";
  firework.style.left = x + "px";
  firework.style.top = y + "px";
  document.body.appendChild(firework);

  setTimeout(() => firework.remove(), 1000);
}

/* ======================================================
   🚀 INIT
====================================================== */

showPage(0);
