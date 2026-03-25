// Scroll progress
const navProgress = document.querySelector('.nav-progress');
window.addEventListener('scroll', () => {
    const pct = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    navProgress.style.width = pct + '%';
});

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-menu');
toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
}));

// Scroll animations
const animated = document.querySelectorAll('[data-animate]');
const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            const delay = e.target.dataset.delay || 0;
            e.target.style.transitionDelay = delay + 'ms';
            e.target.classList.add('visible');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.15 });
animated.forEach(el => io.observe(el));

// Stat counter animation
const stats = document.querySelectorAll('.stat-num');
const statsIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const target = +el.dataset.target;
        let cur = 0;
        const step = target / 40;
        const tick = () => {
            cur += step;
            if (cur >= target) { el.textContent = target; return; }
            el.textContent = Math.floor(cur);
            requestAnimationFrame(tick);
        };
        tick();
        statsIo.unobserve(el);
    });
}, { threshold: 0.5 });
stats.forEach(s => statsIo.observe(s));

// Skill bar animation
const fills = document.querySelectorAll('.fill');
const skillsIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.querySelectorAll('.fill').forEach((f, i) => {
            setTimeout(() => { f.style.width = f.dataset.w + '%'; }, i * 80);
        });
        skillsIo.unobserve(e.target);
    });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-group').forEach(g => skillsIo.observe(g));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        e.preventDefault();
        const t = document.querySelector(a.getAttribute('href'));
        if (t) window.scrollTo({ top: t.offsetTop - 64, behavior: 'smooth' });
    });
});

// Project card hover tilt
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) / 25;
        const y = (e.clientY - r.top - r.height / 2) / 25;
        card.style.transform = `perspective(800px) translateY(-4px) rotateX(${-y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});
