let muted = false;

// PAGE NAVIGATION
function goToPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page${page}`).classList.add('active');

  if (page === 5) launchConfetti();
}

// HUG BUTTON
document.getElementById('hugBtn').addEventListener('click', () => {
  for (let i = 0; i < 20; i++) {
    confetti({
      particleCount: 5,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
});

// REASONS TOGGLE
document.querySelectorAll('.reason').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('active'));
});

// MEMORIES
document.querySelectorAll('.memory').forEach(mem => {
  mem.addEventListener('click', () => mem.classList.toggle('active'));
});

// WISH BUTTON
document.getElementById('wishBtn').addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 120,
    colors: ['#ffc0cb', '#e6c1ff', '#fff1a8']
  });
  setTimeout(() => goToPage(5), 1200);
});

// CONFETTI ON FINAL PAGE
function launchConfetti() {
  const duration = 5 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 3,
      spread: 100,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// FIREWORK CLICKS
document.addEventListener('click', e => {
  if (document.getElementById('page5').classList.contains('active')) {
    confetti({
      particleCount: 30,
      spread: 80,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      }
    });
  }
});

// MUTE TOGGLE (placeholder)
document.getElementById('muteToggle').addEventListener('click', () => {
  muted = !muted;
  document.getElementById('muteToggle').textContent = muted ? '🔇' : '🔊';
});
