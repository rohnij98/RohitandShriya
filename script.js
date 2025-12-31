let muted = false;
const bgMusic = document.getElementById("bgMusic");
let musicStarted = false;

/* SAFE AUTOPLAY (starts on first click) */
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

/* MUTE */
muteToggle.onclick = () => {
  muted = !muted;
  bgMusic.muted = muted;
  muteToggle.textContent = muted ? "🔇" : "🔊";
};

/* NAV */
function goToPage(n) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(`page${n}`).classList.add("active");
  if (n === 5) confetti({ particleCount: 200, spread: 180 });
}

/* INTERACTIONS */
hugBtn.onclick = () => confetti({ particleCount: 80, spread: 100 });

document.querySelectorAll(".reason").forEach(r =>
  r.onclick = () => r.classList.toggle("active")
);

document.querySelectorAll(".memory").forEach(m =>
  m.onclick = () => m.classList.toggle("active")
);

wishBtn.onclick = () => {
  confetti({ particleCount: 120, spread: 120 });
  setTimeout(() => goToPage(5), 1200);
};
