/* ======================================================
   🚀 INITIALISE AFTER DOM LOAD
====================================================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ======================================================
     📄 PAGE NAVIGATION
  ====================================================== */
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.style.display = i === index ? "flex" : "none";
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

  // Make navigation globally accessible
  window.nextPage = nextPage;
  window.goHome = goHome;

  showPage(0);

  /* ======================================================
     🎵 BACKGROUND MUSIC (BROWSER SAFE)
  ====================================================== */
  const bgMusic = document.getElementById("bgMusic");
  const muteToggle = document.getElementById("muteToggle");

  let musicStarted = false;

  function startMusic() {
    if (!musicStarted && bgMusic) {
      bgMusic.volume = 0.4;
      bgMusic.play().catch(() => {});
      musicStarted = true;
    }
  }

  document.addEventListener("click", startMusic, { once: true });
  document.addEventListener("touchstart", startMusic, { once: true });

  if (muteToggle && bgMusic) {
    muteToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      bgMusic.muted = !bgMusic.muted;
      muteToggle.textContent = bgMusic.muted ? "🔇" : "🔊";
    });
  }

  /* ======================================================
     🤗 PAGE 1 — HUG BUTTON
  ====================================================== */
  const hugBtn = document.getElementById("hugBtn");
  if (hugBtn) {
    hugBtn.addEventListener("click", () => {
      spawnHearts(30);
      bounceMascot();
    });
  }

  /* ======================================================
     💌 PAGE 2 — REASONS
  ====================================================== */
  document.querySelectorAll(".reason").forEach(reason => {
    reason.addEventListener("click", () => {
      reason.classList.toggle("revealed");
    });
  });

  /* ======================================================
     🧸 PAGE 3 — MEMORIES
  ====================================================== */
  document.querySelectorAll(".memory").forEach(memory => {
    memory.addEventListener("click", () => {
      const caption = memory.querySelector(".caption");
      if (caption) caption.classList.toggle("show");
    });
  });

  /* ======================================================
     🌼 PAGE 4 — WISH
  ====================================================== */
  const wishBtn = document.getElementById("wishBtn");
  if (wishBtn) {
    wishBtn.addEventListener("click", () => {
      scatterSparkles();
      setTimeout(nextPage, 1200);
    });
  }

  /* ======================================================
     🎆 PAGE 5 — FIREWORKS
  ====================================================== */
  const finale = document.getElementById("page5");
  if (finale) {
    finale.addEventListener("click", (e) => {
      createFirework(e.clientX, e.clientY);
    });
  }

  /* ======================================================
     🐰 MASCOT
  ====================================================== */
  const mascot = document.getElementById("mascot");

  function bounceMascot() {
    if (!mascot) return;
    mascot.classList.add("bounce");
    setTimeout(() => mascot.classList.remove("bounce"), 600);
  }

  /* ======================================================
     💕 HEARTS
  ====================================================== */
  function spawnHearts(count) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.bottom = "-20px";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }
  }

  /* ======================================================
     ✨ SPARKLES
  ====================================================== */
  function scatterSparkles() {
    for (let i = 0; i < 25; i++) {
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
     ⏳ LIVE COUNTDOWN
  ====================================================== */
  const countdownEl = document.getElementById("countdownTimer");

  if (countdownEl) {
    const targetDate = new Date("January 1, 2026 00:00:00").getTime();

    function updateCountdown() {
      const diff = targetDate - Date.now();

      if (diff <= 0) {
        countdownEl.textContent =
          "🎉 HAPPY NEW YEAR! 🎉 Time for our new beginning 💖";
        return;
      }

      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      countdownEl.textContent =
        `${String(h).padStart(2, "0")}:` +
        `${String(m).padStart(2, "0")}:` +
        `${String(s).padStart(2, "0")} — Until our new year ✨`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

});
