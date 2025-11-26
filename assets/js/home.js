// Particles
let canvas, ctx, mouseX = 0, mouseY = 0;
const particles = [];

function initParticles() {
    canvas = document.getElementById('particles-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 3 + 1
        });
    }

    canvas.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    animateParticles();
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        // Follow mouse subtly
        p.vx += (mouseX - p.x) * 0.0001;
        p.vy += (mouseY - p.y) * 0.0001;

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${p.radius / 5})`;
        ctx.fill();
    });

    requestAnimationFrame(animateParticles);
}

// Carousel
let currentSlide = 0;
const carousel = document.getElementById('featured-carousel');
const totalSlides = 3;

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    carousel.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    carousel.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}

document.addEventListener('DOMContentLoaded', () => {
    initParticles();

    document.querySelector('.carousel-next')?.addEventListener('click', nextSlide);
    document.querySelector('.carousel-prev')?.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000);
});