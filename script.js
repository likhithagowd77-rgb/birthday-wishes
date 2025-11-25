// Typing Effect
const text = "Wishing you the happiest birthday filled with love and joy 🎉💖";
let index = 0;
function typeEffect() {
    document.getElementById("typing").textContent = text.slice(0, index);
    index++;
    if (index <= text.length) setTimeout(typeEffect, 50);
}
typeEffect();

// Button Message Reveal
document.getElementById("btn").addEventListener("click", () => {
    document.getElementById("message").classList.remove("hidden");
    startConfetti();
});

// Confetti Animation
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createConfetti() {
    for (let i = 0; i < 200; i++) {
        particles.push({
            x: random(0, canvas.width),
            y: random(0, canvas.height),
            size: random(2, 6),
            speed: random(1, 3),
            color: `hsl(${random(0, 360)}, 100%, 60%)`
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
        p.y += p.speed;
        if (p.y > canvas.height) p.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}

function startConfetti() {
    if (particles.length === 0) {
        createConfetti();
        drawConfetti();
    }
}
