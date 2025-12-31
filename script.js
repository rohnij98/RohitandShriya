let muted = false;
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

/* PAGE NAV */
function goToPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page${n}`).classList.add("active");
  if (n === 5) bigConfetti();
}

/* 🎵 MUSIC */
document.addEventListener("click", () => {
  if (!musicStarted && !muted) {
    bgMusic.volume = 0;
    bgMusic.play();
    let v = 0;
    const fade = setInterval(() => {
      if (v < 0.4) {
        v += 0.02;
        bgMusic.volume = v;
      } else clearInterval(fade);
    }, 100);
    musicStarted = true;
  }
}, { once: true });

muteToggle.onclick = () => {
  muted = !muted;
  bgMusic.muted = muted;
  muteToggle.textContent = muted ? "🔇" : "🔊";
};

/* 🤗 Hug */
hugBtn.onclick = () => {
  confetti({ particleCount: 80, spread: 100, colors: ['#ffc0cb','#e6c1ff'] });
};

/* 💌 Reasons */
document.querySelectorAll(".reason").forEach(r =>
  r.onclick = () => r.classList.toggle("active")
);

/* 📸 Memories */
document.querySelectorAll(".memory").forEach(m =>
  m.onclick = () => m.classList.toggle("active")
);

/* 🌼 Wish */
wishBtn.onclick = () => {
  confetti({ particleCount: 120, spread: 120 });
  setTimeout(() => goToPage(5), 1200);
};

/* 🎆 Finale */
function bigConfetti() {
  confetti({ particleCount: 200, spread: 180 });
}

document.addEventListener("click", e => {
  if (page5.classList.contains("active")) {
    confetti({
      particleCount: 30,
      origin: {
        x: e.clientX / innerWidth,
        y: e.clientY / innerHeight
      }
    });
  }
});
