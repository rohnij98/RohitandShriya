// Global Variables
let isMuted = false;
const pages = ['page1', 'page2', 'page3', 'page4', 'page5'];

// Navigation Function
function navigateTo(pageId) {
    pages.forEach(id => document.getElementById(id).classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    playSound('chime'); // Page transition sound
}

// Mute Toggle
function toggleMute() {
    isMuted = !isMuted;
    document.querySelector('.mute-toggle').textContent = isMuted ? '🔇 Unmute Sounds 🧸' : '🔊 Mute Sounds 🧸';
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => audio.muted = isMuted);
}

// Play Sound Helper
function playSound(id) {
    if (!isMuted) {
        document.getElementById(id).play();
    }
}

// Page 1: Show Hearts and Teddy Bears
function showHearts() {
    const container = document.getElementById('hearts');
    const teddyContainer = document.getElementById('teddy-float');
    container.innerHTML = '';
    teddyContainer.innerHTML = '';
    for (let i = 0; i < 25; i++) { // More hearts
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(heart);
    }
    for (let i = 0; i < 10; i++) { // Floating teddy bears
        const teddy = document.createElement('div');
        teddy.className = 'teddy-bear';
        teddy.textContent = '🧸';
        teddy.style.left = Math.random() * 100 + '%';
        teddy.style.animationDelay = Math.random() * 3 + 's';
        teddyContainer.appendChild(teddy);
    }
    setTimeout(() => {
        container.innerHTML = '';
        teddyContainer.innerHTML = '';
    }, 6000); // Longer duration for cuteness
}

// Page 2: Reveal Reason
function revealReason(item) {
    const hidden = item.querySelector('.hidden');
    hidden.style.display = hidden.style.display === 'block' ? 'none' : 'block';
    hidden.style.animation = 'fadeIn 0.5s';
    // Add a cute sparkle effect
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.textContent = '✨';
    sparkle.style.left = '50%';
    sparkle.style.top = '50%';
    item.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
}

// Page 3: Pulse and Tooltip
function pulse(item) {
    item.style.transform = 'scale(1.1) rotate(3deg)'; // More playful
    setTimeout(() => item.style.transform = 'scale(1) rotate(0deg)', 300);
}
function showTooltip(item, memory) {
    const tooltip = document.getElementById('tooltip');
    tooltip.textContent = `<!-- INSERT: Caption for ${memory}, e.g., "Remember our ${memory.toLowerCase()}? It was amazing! 🥰