/* ======================================================
   WAIT FOR DOM TO LOAD (CRITICAL FIX)
====================================================== */
document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     GLOBAL PAGE STATE
  ================================ */
  const pages = document.querySelectorAll(".page");
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });
    currentPage = index;
  }

  window.nextPage = function () {
    if (currentPage < pages.length - 1) {
      showPage(currentPage + 1);
    }
  };

  window.goHome = function () {
    showPage(0);
  };

  showPage(0);

  /* ===============================
     BACKGROUND MUSIC (SAFE)
  ================================ */
  const bgMusic = document.getElementById("bgMusic");
  const muteToggle = document.getElementById("muteToggle");

  let musicStarted = false;
  let muted = false;

  function startMusic() {
    if (!musicStarted && !muted && bgMusic) {
      bgMusic.volume = 0.4;
      bgMusic.play().catch(() => {});
      musicStarted = true;
    }
  }

  document.addEventListener("click", startMusic);
  document.addEventListener("touchstart", startMusic);
  document.addEventListener("keydown", startMusic);

  if (muteToggle && bgMusic) {
    muteToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      muted = !muted;
      bgMusic.muted = muted;
      muteToggle.textContent = muted ? "🔇" : "🔊";
    });
  }

  /* ===============================
     PAGE 1 — HUG
  ================================ */
  const hugBtn = document.getElementById("hugBtn");
  if (hugBtn) {
    hugBtn.addEventListener("click", () => {
      spawnHearts(25);
      bounceMascot();
    });
  }

  /* ===============================
     PAGE 2 — REASONS
  ================================ */
  document.querySelectorAll(".reason").forEach(reason => {
    reason.addEventListener("click", () => {
      reason.classList.toggle("revealed");
    });
  });

  /* ===============================
     PAGE 3 — MEMORIES
  ================================ */
  document.querySelectorAll(".memory").forEach(memory => {
    memory.addEventListener("click", () => {
      const caption = memory.querySelector(".caption");
      if (caption) caption.classList.toggle("show");
    });
  });

  /* ===============================
     PAGE 4 — WISH
  ================================ */
  const wishBtn = document.getElementById("wishBtn");
  if (wishBtn) {
    wishBtn.addEventListener("click", () => {
      scatterSparkles();
      setTimeout(() => nextPage(), 1200);
    });
  }

  /* ===============================
     PAGE 5 — FIREWORKS
  ================================ */
  const page5 = document.getElementById("page5");
  if (page5) {
    page5.addEventListener("click", (e) => {
      createFirework(e.clientX, e.clientY);
    });
  }

  /* ===============================
     MASCOT
  ================================ */
  const mascot = document.getElementById("mascot");

  function bounceMascot() {
    if (!mascot) return;
    mascot.classList.add("bounce");
    setTimeout(() => mascot.classList.remove("bounce"), 600);
  }

  /* ===============================
     HEARTS
  ================================ */
  function spawnHearts(count = 15) {
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("div");
      heart.className = "floating-heart";
      heart.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 4000);
    }
  }

  /* ===============================
     SPARKLES
  ================================ */
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

  /* ===============================
     FIREWORK
  ================================ */
  function createFirework(x, y) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.left = x + "px";
    firework.style.top = y + "px";
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 1000);
  }

  /* ===============================
     LIVE COUNTDOWN
  ================================ */
  const countdownEl = document.getElementById("countdownTimer");

  if (countdownEl) {
    const targetDate = new Date("January 1, 2026 00:00:00").getTime();

    function updateCountdown() {
      const now = Date.now();
      const diff = targetDate - now;

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
