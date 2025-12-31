/* ======================================================
   💖 GLOBAL VARIABLES
====================================================== */

const pages = document.querySelectorAll(".page");
let currentPage = 0;

/* ======================================================
   🎵 BACKGROUND MUSIC (FIXED)
====================================================== */

const bgMusic = document.getElementById("bgMusic");
const muteToggle = document.getElementById("muteToggle");

let musicStarted = false;
let muted = false;

function startMusic() {
  if (!musicStarted && !muted) {
    bgMusic.volume = 0.4;
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);
document.addEventListener("keydown", startMusic);

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
   🤗 PAGE 1 — HUG
====================================================== */

document.getElementById("hugBtn").addEventListener("click", () => {
  spawnHearts(30);
  bounceMascot();
});

/* ======================================================
   💌 PAGE 2 — REASONS
====================================================== */

document.querySelectorAll(".reason").forEach(reason => {
  reason.addEventListener("click", () => {
    reason.classList.add("revealed");
  });
});

/* ======================================================
   🧸 PAGE 3 — MEMORIES
====================================================== */

document.querySelectorAll(".memory").forEach(memory => {
  memory.addEventListener("click", () => {
    memory.querySelector(".caption").classList.toggle("show");
  });
});

/* ======================================================
   🌼 PAGE 4 — WISH
====================================================== */

document.getElementById("wishBtn").addEventListener("click", () => {
  scatterSparkles();
  setTimeout(() => nextPage(), 1500);
});

/* ======================================================
   🎆 PAGE 5 — FIREWORKS
====================================================== */

document.getElementById("page5").addEventListener("click", (e) => {
  createFirework(e.clientX, e.clientY);
});

/* ======================================================
   🐰 MASCOT
====================================================== */

const mascot = document.getElementById("mascot");

function bounceMascot() {
  mascot.classList.add("bounce");
  setTimeout(() => mascot.classList.remove("bounce"), 600);
}

/* ======================================================
   💕 HEARTS
====================================================== */

function spawnHearts(count = 15) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "floating-heart";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}

/* ======================================================
   ✨ SPARKLES
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
   🎇 FIREWORK
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
   ⏳ LIVE COUNTDOWN (NEW!)
====================================================== */

const countdownEl = document.getElementById("countdownTimer");

/* 🔧 SET YOUR TARGET DATE HERE */
const targetDate = new Date("January 1, 2026 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "🎉 HAPPY NEW YEAR! 🎉 Time for our new beginning 💖";
    return;
  }

  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")} — Until our new year ✨`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

/* ======================================================
   🚀 INIT
====================================================== */

showPage(0);
