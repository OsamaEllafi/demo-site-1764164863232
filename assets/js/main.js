document.addEventListener('DOMContentLoaded', () => {
    // Mobile nav
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');
    const auth = document.querySelector('.auth');

    hamburger?.addEventListener('click', () => {
        nav.classList.toggle('active');
        auth.classList.toggle('active');
    });

    // Modals
    window.openModal = (id) => {
        document.getElementById(id).classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeModal = (id) => {
        document.getElementById(id).classList.remove('active');
        document.body.style.overflow = '';
    };

    // Close modal on outside click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal.id);
        });
    });

    // Scroll reveals
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Accordion
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.classList.toggle('active');
        });
    });
});