let muted = false;
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

/* PAGE NAV */
function goToPage(num) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page${num}`).classList.add('active');
  if (num === 5) launchConfetti();
}

/* MUSIC */
document.addEventListener('click', () => {
  if (!musicStarted && !muted) {
    bgMusic.volume = 0;
    bgMusic.play();
    fadeInMusic();
    musicStarted = true;
  }
}, { once: true });

function fadeInMusic() {
  let v = 0;
  const i = setInterval(() => {
    if (v < 0.4) {
      v += 0.02;
      bgMusic.volume = v;
    } else clearInterval(i);
  }, 100);
}

document.getElementById("muteToggle").onclick = () => {
  muted = !muted;
  bgMusic.muted = muted;
  muteToggle.textContent = muted ? "🔇" : "🔊";
};

/* HUG */
document.getElementById("hugBtn").onclick = () => {
  confetti({ particleCount: 80, spread: 100, colors: ['#ffc0cb','#e6c1ff'] });
};

/* REASONS */
document.querySelectorAll(".reason").forEach(r =>
  r.onclick = () => r.classList.toggle("active")
);

/* MEMORIES */
document.querySelectorAll(".memory").forEach(m =>
  m.onclick = () => m.classList.toggle("active")
);

/* WISH */
document.getElementById("wishBtn").onclick = () => {
  confetti({ particleCount: 120, spread: 120 });
  setTimeout(() => goToPage(5), 1200);
};

/* FINAL FIREWORKS */
function launchConfetti() {
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
