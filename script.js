/* ═══════════════════════════════════════════════════════════════
   DHRUV AGRAWAL — NEXT-LEVEL PORTFOLIO JS
   Custom cursor · Text scramble · Scroll reveals · Micro-interactions
   ═══════════════════════════════════════════════════════════════ */

(() => {
    'use strict';

    // ── Custom Cursor ──
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    if (cursorDot && cursorRing && window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', e => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.left = mouseX + 'px';
            cursorDot.style.top = mouseY + 'px';
        });

        function animateRing() {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top = ringY + 'px';
            cursorRing.style.transform = `translate(-50%, -50%)`;
            cursorDot.style.transform = `translate(-50%, -50%)`;
            requestAnimationFrame(animateRing);
        }
        animateRing();
    }

    // ── Navigation Scroll Effect ──
    const nav = document.querySelector('.nav');
    const navProgress = document.querySelector('.nav-progress');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = (scrollY / docHeight) * 100;

        if (nav) nav.classList.toggle('scrolled', scrollY > 50);
        if (navProgress) navProgress.style.width = pct + '%';
    }, { passive: true });

    // ── Mobile Menu Toggle ──
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('open');
            navToggle.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
                navToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });
        });
    }

    // ── Smooth Scroll ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                const navH = nav ? nav.offsetHeight : 0;
                window.scrollTo({
                    top: target.offsetTop - navH,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ── Scroll Reveal (IntersectionObserver) ──
    const reveals = document.querySelectorAll('.reveal-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(el => revealObserver.observe(el));

    // ── Text Scramble Effect ──
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_\\/[]{}—=+*^?#________';
            this.originalText = el.textContent;
        }

        scramble() {
            const length = this.originalText.length;
            let iteration = 0;
            const maxIterations = length * 3;

            const interval = setInterval(() => {
                this.el.textContent = this.originalText
                    .split('')
                    .map((char, index) => {
                        if (index < iteration / 3) return this.originalText[index];
                        return this.chars[Math.floor(Math.random() * this.chars.length)];
                    })
                    .join('');

                iteration++;
                if (iteration >= maxIterations) {
                    this.el.textContent = this.originalText;
                    clearInterval(interval);
                }
            }, 30);
        }
    }

    // Trigger scramble on hero title lines when they become visible
    const scrambleEls = document.querySelectorAll('[data-scramble]');
    const scrambleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    new TextScramble(entry.target).scramble();
                }, parseFloat(getComputedStyle(entry.target.parentElement).getPropertyValue('--delay') || 0) * 1000 + 300);
                scrambleObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    scrambleEls.forEach(el => scrambleObserver.observe(el));

    // ── Animated Counters (fallback when no GSAP) ──
    const counters = document.querySelectorAll('[data-count]');

    if (typeof gsap === 'undefined') {
        const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-count'));
                const duration = 1500;
                const start = performance.now();

                function update(now) {
                    const elapsed = now - start;
                    const progress = Math.min(elapsed / duration, 1);
                    // Ease out cubic
                    const eased = 1 - Math.pow(1 - progress, 3);
                    el.textContent = Math.floor(eased * target);
                    if (progress < 1) requestAnimationFrame(update);
                    else el.textContent = target;
                }

                requestAnimationFrame(update);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
    }

    // ── Skill Bar Animation (fallback when no GSAP) ──
    const skillBars = document.querySelectorAll('.sbar-fill');

    if (typeof gsap === 'undefined') {
        const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bars = entry.target.querySelectorAll('.sbar-fill');
                bars.forEach((bar, i) => {
                    setTimeout(() => {
                        bar.style.width = bar.getAttribute('data-width') + '%';
                    }, i * 80);
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    const skillsSection = document.querySelector('#skills');
    if (skillsSection) skillObserver.observe(skillsSection);
    }

    // ── Experience Timeline Line Fill (fallback when no GSAP) ──
    const expLineFill = document.querySelector('.exp-line-fill');
    const expTimeline = document.querySelector('.exp-timeline');

    if (expLineFill && expTimeline && typeof gsap === 'undefined') {
        const expObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        expLineFill.style.height = '100%';
                    }, 400);
                    expObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        expObserver.observe(expTimeline);
    }

    // ── Magnetic Effect on Buttons ──
    const magneticEls = document.querySelectorAll('.magnetic');

    magneticEls.forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
            el.style.transition = 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            setTimeout(() => { el.style.transition = ''; }, 400);
        });
    });

    // ── Parallax Hero on Scroll (disabled when GSAP active) ──
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.querySelector('.hero');

    if (heroContent && heroSection && typeof gsap === 'undefined') {
        window.addEventListener('scroll', () => {
            const scrollY = window.pageYOffset;
            const heroH = heroSection.offsetHeight;
            if (scrollY < heroH) {
                const pct = scrollY / heroH;
                heroContent.style.transform = `translateY(${scrollY * 0.25}px)`;
                heroContent.style.opacity = 1 - pct * 0.6;
            }
        }, { passive: true });
    }

    // ── Project Card Hover Tilt ──
    document.querySelectorAll('.project-card-v2').forEach(card => {
        const inner = card.querySelector('.pcard-inner');
        if (!inner) return;

        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            inner.style.transform = `translateY(-4px) perspective(800px) rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            inner.style.transform = 'translateY(0) perspective(800px) rotateX(0) rotateY(0)';
            inner.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.5s, border-color 0.5s, box-shadow 0.5s';
            setTimeout(() => { inner.style.transition = ''; }, 500);
        });
    });

    // ── Metric Counter Animation ──
    const metricVals = document.querySelectorAll('.pmetric-val');

    const metricObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                metricVals.forEach(el => {
                    const text = el.textContent;
                    const num = parseInt(text);
                    if (isNaN(num)) return;

                    let current = 0;
                    const suffix = text.replace(/[0-9]/g, '');
                    const step = num / 40;

                    const timer = setInterval(() => {
                        current += step;
                        if (current >= num) {
                            el.textContent = text;
                            clearInterval(timer);
                        } else {
                            el.textContent = Math.floor(current) + suffix;
                        }
                    }, 25);
                });
                metricObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const workSection = document.querySelector('#work');
    if (workSection) metricObserver.observe(workSection);

    // ── Page Loader ──
    const loader = document.querySelector('.page-loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.classList.add('hidden');
                document.body.style.overflow = '';
            }, 1600);
        });
        // Fallback in case load already fired
        if (document.readyState === 'complete') {
            setTimeout(() => loader.classList.add('hidden'), 1600);
        }
    }

    // ── Particle Constellation Canvas ──
    const canvas = document.getElementById('particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let w, h, particlesArr = [];
        let canvasMouseX = -9999, canvasMouseY = -9999;

        function resizeCanvas() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        document.addEventListener('mousemove', e => {
            canvasMouseX = e.clientX;
            canvasMouseY = e.clientY;
        });

        class CParticle {
            constructor() { this.init(); }
            init() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.vy = (Math.random() - 0.5) * 0.4;
                this.r = Math.random() * 1.5 + 0.5;
                this.alpha = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                // Mouse repulsion
                const dx = this.x - canvasMouseX;
                const dy = this.y - canvasMouseY;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const force = (150 - dist) / 150;
                    this.vx += (dx / dist) * force * 0.3;
                    this.vy += (dy / dist) * force * 0.3;
                }
                // Damping
                this.vx *= 0.99;
                this.vy *= 0.99;
                // Wrap
                if (this.x < 0) this.x = w;
                if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h;
                if (this.y > h) this.y = 0;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(108, 99, 255, ${this.alpha})`;
                ctx.fill();
            }
        }

        const pCount = Math.min(80, Math.floor((w * h) / 15000));
        for (let i = 0; i < pCount; i++) particlesArr.push(new CParticle());

        function drawLines() {
            for (let i = 0; i < particlesArr.length; i++) {
                for (let j = i + 1; j < particlesArr.length; j++) {
                    const dx = particlesArr[i].x - particlesArr[j].x;
                    const dy = particlesArr[i].y - particlesArr[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(particlesArr[i].x, particlesArr[i].y);
                        ctx.lineTo(particlesArr[j].x, particlesArr[j].y);
                        ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 120)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, w, h);
            particlesArr.forEach(p => { p.update(); p.draw(); });
            drawLines();
            requestAnimationFrame(animateParticles);
        }
        animateParticles();
    }

    // ── Back to Top Button ──
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.classList.toggle('visible', window.pageYOffset > 600);
        }, { passive: true });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ── Testimonial Carousel ──
    const tTrack = document.getElementById('testimonialTrack');
    const tPrev = document.getElementById('tPrev');
    const tNext = document.getElementById('tNext');
    const tDots = document.getElementById('tDots');

    if (tTrack && tPrev && tNext && tDots) {
        let tIndex = 0;
        const slides = tTrack.querySelectorAll('.testimonial-slide');
        const dots = tDots.querySelectorAll('.tnav-dot');
        const total = slides.length;

        function goToSlide(i) {
            tIndex = ((i % total) + total) % total;
            tTrack.style.transform = `translateX(-${tIndex * 100}%)`;
            dots.forEach((d, idx) => d.classList.toggle('active', idx === tIndex));
        }

        tNext.addEventListener('click', () => goToSlide(tIndex + 1));
        tPrev.addEventListener('click', () => goToSlide(tIndex - 1));
        dots.forEach((dot, idx) => dot.addEventListener('click', () => goToSlide(idx)));

        // Auto-advance every 6s
        let autoPlay = setInterval(() => goToSlide(tIndex + 1), 6000);
        tTrack.closest('.testimonials-carousel').addEventListener('mouseenter', () => clearInterval(autoPlay));
        tTrack.closest('.testimonials-carousel').addEventListener('mouseleave', () => {
            autoPlay = setInterval(() => goToSlide(tIndex + 1), 6000);
        });

        // Touch/swipe support
        let touchStartX = 0;
        tTrack.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
        tTrack.addEventListener('touchend', e => {
            const diff = touchStartX - e.changedTouches[0].clientX;
            if (Math.abs(diff) > 50) goToSlide(tIndex + (diff > 0 ? 1 : -1));
        }, { passive: true });
    }

    // ── Glow Card Effect (cursor-tracking glow on cards) ──
    const glowTargets = document.querySelectorAll('.glow-card, .info-card, .exp-card, .edu-card, .contact-card-v2, .pcard-inner');

    glowTargets.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--glow-x', x + 'px');
            card.style.setProperty('--glow-y', y + 'px');
        });
    });

    // ── Enhanced Hamburger Toggle ──
    if (navToggle) {
        const origClickHandler = navToggle.onclick;
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
        });
    }

    // ── Keyboard Navigation for Carousel ──
    document.addEventListener('keydown', e => {
        if (e.key === 'ArrowLeft' && tPrev) tPrev.click();
        if (e.key === 'ArrowRight' && tNext) tNext.click();
    });

    // ── Console Easter Egg ──
    console.log('%c👋 Hey there!', 'font-size: 24px; font-weight: bold;');
    console.log('%cChecking out the code? Nice.', 'font-size: 16px; color: #6c63ff;');
    console.log('%cBuilt with vanilla JS, CSS, and obsessive attention to detail.', 'font-size: 12px; color: #8b92a5;');
    console.log('%cTry Cmd+K for quick navigation!', 'font-size: 12px; color: #00e88f;');

    // ── Cinematic Intro ──
    const intro = document.getElementById('cinematicIntro');
    const introCanvas = document.getElementById('introCanvas');
    if (intro && introCanvas) {
        const ictx = introCanvas.getContext('2d');
        introCanvas.width = window.innerWidth;
        introCanvas.height = window.innerHeight;

        const introParticles = [];
        for (let i = 0; i < 60; i++) {
            introParticles.push({
                x: introCanvas.width / 2 + (Math.random() - 0.5) * 100,
                y: introCanvas.height / 2 + (Math.random() - 0.5) * 100,
                vx: (Math.random() - 0.5) * 3,
                vy: (Math.random() - 0.5) * 3,
                r: Math.random() * 2 + 1,
                alpha: Math.random() * 0.6 + 0.2
            });
        }

        let introFrame;
        function animateIntro() {
            ictx.fillStyle = 'rgba(5, 5, 8, 0.15)';
            ictx.fillRect(0, 0, introCanvas.width, introCanvas.height);
            introParticles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.alpha *= 0.995;
                ictx.beginPath();
                ictx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ictx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
                ictx.fill();
            });
            introFrame = requestAnimationFrame(animateIntro);
        }
        animateIntro();

        // Dismiss intro after animation
        setTimeout(() => {
            // Explode particles outward
            introParticles.forEach(p => {
                p.vx = (Math.random() - 0.5) * 20;
                p.vy = (Math.random() - 0.5) * 20;
            });
            setTimeout(() => {
                intro.classList.add('hidden');
                cancelAnimationFrame(introFrame);
                document.body.style.overflow = '';
            }, 600);
        }, 2800);
    }

    // ── Cursor Trail ──
    const trailCanvas = document.getElementById('cursorTrail');
    if (trailCanvas && window.matchMedia('(pointer: fine)').matches) {
        const tctx = trailCanvas.getContext('2d');
        trailCanvas.width = window.innerWidth;
        trailCanvas.height = window.innerHeight;
        window.addEventListener('resize', () => {
            trailCanvas.width = window.innerWidth;
            trailCanvas.height = window.innerHeight;
        });

        const trail = [];
        let trailMouseX = 0, trailMouseY = 0;

        document.addEventListener('mousemove', e => {
            trailMouseX = e.clientX;
            trailMouseY = e.clientY;
            trail.push({
                x: trailMouseX,
                y: trailMouseY,
                alpha: 0.5,
                r: 3
            });
            if (trail.length > 30) trail.shift();
        });

        function animateTrail() {
            tctx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
            trail.forEach((p, i) => {
                p.alpha *= 0.92;
                p.r *= 0.97;
                if (p.alpha < 0.01) return;
                tctx.beginPath();
                tctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                tctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
                tctx.fill();
            });
            // Remove dead particles
            while (trail.length > 0 && trail[0].alpha < 0.01) trail.shift();
            requestAnimationFrame(animateTrail);
        }
        animateTrail();
    }

    // ── Horizontal Scroll with Mouse Wheel (fallback when no GSAP) ──
    const hscrollWrap = document.querySelector('.hscroll-wrap');
    if (hscrollWrap && typeof gsap === 'undefined') {
        hscrollWrap.addEventListener('wheel', e => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.preventDefault();
                hscrollWrap.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }

    // ── Gradient Border Angle Update (for cards) ──
    document.querySelectorAll('.gradient-border').forEach(el => {
        el.addEventListener('mousemove', e => {
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const angle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 180;
            el.style.setProperty('--gradient-angle', angle + 'deg');
        });
    });

    // ── Theme Toggle ──
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        const themes = ['dark', 'light', 'salesforce', 'ocean'];
        const saved = localStorage.getItem('theme');
        if (saved && themes.includes(saved)) {
            document.documentElement.setAttribute('data-theme', saved);
        }

        themeToggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme') || 'dark';
            const idx = themes.indexOf(current);
            const next = themes[(idx + 1) % themes.length];
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
        });
    }

    // ── Command Palette (Cmd+K / Ctrl+K) ──
    const cmdPalette = document.getElementById('cmdPalette');
    const cmdInput = document.getElementById('cmdInput');
    const cmdResults = document.getElementById('cmdResults');

    if (cmdPalette && cmdInput && cmdResults) {
        const cmdItems = cmdResults.querySelectorAll('.cmd-item');
        let activeIdx = -1;

        function openCmd() {
            cmdPalette.classList.add('open');
            cmdPalette.setAttribute('aria-hidden', 'false');
            cmdInput.value = '';
            cmdItems.forEach(i => i.classList.remove('hidden', 'active'));
            activeIdx = -1;
            setTimeout(() => cmdInput.focus(), 100);
            document.body.style.overflow = 'hidden';
        }

        function closeCmd() {
            cmdPalette.classList.remove('open');
            cmdPalette.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        function getVisibleItems() {
            return [...cmdItems].filter(i => !i.classList.contains('hidden'));
        }

        function setActive(idx) {
            const visible = getVisibleItems();
            visible.forEach(i => i.classList.remove('active'));
            activeIdx = ((idx % visible.length) + visible.length) % visible.length;
            if (visible[activeIdx]) {
                visible[activeIdx].classList.add('active');
                visible[activeIdx].scrollIntoView({ block: 'nearest' });
            }
        }

        // Open with Cmd+K or Ctrl+K
        document.addEventListener('keydown', e => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                if (cmdPalette.classList.contains('open')) closeCmd();
                else openCmd();
            }
            if (e.key === 'Escape' && cmdPalette.classList.contains('open')) {
                closeCmd();
            }
        });

        // Close on overlay click
        cmdPalette.querySelector('.cmd-overlay').addEventListener('click', closeCmd);

        // Filter
        cmdInput.addEventListener('input', () => {
            const q = cmdInput.value.toLowerCase().trim();
            cmdItems.forEach(item => {
                const text = (item.textContent + ' ' + (item.dataset.keywords || '')).toLowerCase();
                item.classList.toggle('hidden', q && !text.includes(q));
            });
            activeIdx = -1;
            cmdItems.forEach(i => i.classList.remove('active'));
        });

        // Keyboard nav
        cmdInput.addEventListener('keydown', e => {
            const visible = getVisibleItems();
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActive(activeIdx + 1);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActive(activeIdx - 1);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (visible[activeIdx]) {
                    visible[activeIdx].click();
                    closeCmd();
                }
            }
        });

        // Click items
        cmdItems.forEach(item => {
            item.addEventListener('click', () => {
                closeCmd();
            });
        });
    }

    // ── Case Study Modal ──
    const caseModal = document.getElementById('caseModal');
    const caseBody = document.getElementById('caseBody');

    const caseStudies = {
        '1': {
            title: 'Amazon Key for Business',
            subtitle: 'EPAM Systems · March 2025 — Present',
            overview: 'End-to-end Salesforce Sales Cloud and Experience Cloud implementation for Amazon\'s Key for Business product lifecycle, managing the complete sales pipeline from lead generation to property onboarding.',
            challenge: 'Amazon KFB needed a unified platform to manage their complex sales pipeline involving multiple stakeholders, property processing workflows, and digital contract execution at enterprise scale.',
            solution: 'Built a comprehensive Salesforce solution with custom LWC components for the Experience Cloud portal, DocuSign integration enabling 100% digital contract execution, REST API integration with Amazon internal systems, and optimized page load times by 40% through SOQL query optimization and lazy loading.',
            results: ['50% faster property processing workflows', '40% reduction in page load times', '100% digital contract execution via DocuSign', 'Real-time data sync with Amazon internal systems', 'Actionable sales analytics via custom reports and dashboards'],
            tags: ['Sales Cloud', 'Experience Cloud', 'LWC', 'DocuSign', 'Apex', 'REST APIs', 'SFDX']
        },
        '2': {
            title: 'GenAI Chatbot — Service Cloud',
            subtitle: 'LTIMindtree · Honeywell · Jan 2024 — Feb 2025',
            overview: 'AI-powered chatbot integrated directly into the Service Cloud Case Record Page, leveraging Azure AI to provide intelligent case resolution suggestions to support agents.',
            challenge: 'Honeywell\'s support team was spending excessive time researching solutions for complex technical cases, leading to longer resolution times and reduced customer satisfaction.',
            solution: 'Designed and built a responsive LWC-based chatbot UI that integrates with Azure AI via Apex REST callouts. The chatbot analyzes case context and provides relevant solution suggestions in real-time.',
            results: ['30% faster case resolution times', 'Reduced agent research time significantly', 'Seamless Azure AI integration via Apex REST', 'Responsive UI built with Lightning Web Components'],
            tags: ['Service Cloud', 'Azure AI', 'LWC', 'REST API', 'Apex']
        },
        '3': {
            title: 'Field Service Lightning Enhancement',
            subtitle: 'LTIMindtree · Apr 2023 — Dec 2023',
            overview: 'Comprehensive enhancement of Salesforce Field Service Lightning for enterprise service operations, focusing on workflow automation and performance optimization.',
            challenge: 'The existing FSL implementation had performance bottlenecks with batch processing and lacked automated workflows for common service operations.',
            solution: 'Redesigned Flows and custom LWC components for field technicians, optimized Batch Apex processing for large data volumes, and implemented efficient trigger patterns to handle complex business logic.',
            results: ['50% improvement in batch processing speed', 'Automated key service workflows with Flows', 'Custom LWC components for field technicians', 'Optimized trigger architecture for scalability'],
            tags: ['Field Service', 'Flows', 'Batch Apex', 'LWC', 'Triggers']
        },
        '4': {
            title: 'ERP Data Migration',
            subtitle: 'LTIMindtree · Jan 2022 — Mar 2023',
            overview: 'Large-scale data migration and cleanup application built on Salesforce for ERP integration, handling 2M+ records with deduplication and data quality enforcement.',
            challenge: 'The client had 2M+ records spread across multiple legacy systems with significant data quality issues including duplicates, inconsistent formats, and missing fields.',
            solution: 'Built a Salesforce-based data cleanup application using Data Loader for bulk operations and custom Batch Apex for automated deduplication. Implemented REST API integrations for real-time data synchronization with the ERP system.',
            results: ['40% improvement in overall data quality', '2M+ records successfully migrated', 'Automated deduplication processes', 'Real-time ERP synchronization via REST API'],
            tags: ['Data Loader', 'Batch Apex', 'REST API', 'Data Migration']
        },
        '5': {
            title: 'MDM Hub — MuleSoft Integration',
            subtitle: 'LTIMindtree · Oct 2020 — Dec 2021',
            overview: 'Implementation of Salesforce as the Master Data Management Hub, serving as the single source of truth for client data with MuleSoft integration flows for enterprise data synchronization.',
            challenge: 'Client data was fragmented across multiple systems with no single source of truth, leading to inconsistencies and operational inefficiencies.',
            solution: 'Implemented Salesforce as the MDM Hub with Platform Events for real-time data propagation. Built MuleSoft integration flows to synchronize data across enterprise systems and developed Aura components for the management interface.',
            results: ['Established single source of truth for client data', 'Real-time data sync via MuleSoft integration', 'Platform Events for event-driven architecture', 'Custom Aura management interface'],
            tags: ['MDM', 'MuleSoft', 'Platform Events', 'Aura', 'Integration']
        }
    };

    if (caseModal && caseBody) {
        function openCase(id) {
            const data = caseStudies[id];
            if (!data) return;

            caseBody.innerHTML = `
                <h2>${data.title}</h2>
                <p class="case-subtitle">${data.subtitle}</p>
                <p>${data.overview}</p>
                <h3>The Challenge</h3>
                <p>${data.challenge}</p>
                <h3>The Solution</h3>
                <p>${data.solution}</p>
                <h3>Key Results</h3>
                <ul>${data.results.map(r => `<li>${r}</li>`).join('')}</ul>
                <div class="case-tags">${data.tags.map(t => `<span>${t}</span>`).join('')}</div>
            `;

            caseModal.classList.add('open');
            caseModal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function closeCase() {
            caseModal.classList.remove('open');
            caseModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        // Bind case study buttons
        document.querySelectorAll('.case-study-btn').forEach(btn => {
            btn.addEventListener('click', () => openCase(btn.dataset.project));
        });

        // Close handlers
        caseModal.querySelector('.case-close').addEventListener('click', closeCase);
        caseModal.querySelector('.case-overlay').addEventListener('click', closeCase);
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && caseModal.classList.contains('open')) closeCase();
        });
    }

    // ── Ask Dhruv AI Chatbot ──
    const CHATBOT_URL = 'https://ask-dhruv.dhruvagrawal.workers.dev';

    const chatBubble = document.getElementById('chatBubble');
    const chatWindow = document.getElementById('chatWindow');
    const chatClose = document.getElementById('chatClose');
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const chatSend = document.getElementById('chatSend');
    const chatChips = document.getElementById('chatChips');

    if (chatBubble && chatWindow) {
        let chatOpen = false;
        let chatFirstOpen = true;
        let chatSending = false;
        const chatHistory = [];

        // Simple markdown: **bold**, `code`, newlines
        function renderMarkdown(text) {
            return text
                .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                .replace(/`(.+?)`/g, '<code>$1</code>')
                .replace(/\n/g, '<br>');
        }

        function toggleChat() {
            chatOpen = !chatOpen;
            chatWindow.classList.toggle('open', chatOpen);
            chatWindow.setAttribute('aria-hidden', !chatOpen);

            if (chatOpen) {
                const dot = chatBubble.querySelector('.chat-bubble-dot');
                if (dot) dot.style.display = 'none';

                if (chatFirstOpen) {
                    chatFirstOpen = false;
                    appendMsg('bot', "Hey! 👋 I'm Dhruv's AI assistant. Ask me anything about his experience, skills, or projects.\n\nI can also help with general Salesforce questions and resume tips!");
                }
                setTimeout(() => chatInput.focus(), 100);
            }
        }

        function appendMsg(role, text) {
            const div = document.createElement('div');
            div.className = 'chat-msg ' + role;
            if (role === 'bot') {
                div.innerHTML = renderMarkdown(text);
            } else {
                div.textContent = text;
            }
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showTyping() {
            const el = document.createElement('div');
            el.className = 'chat-typing';
            el.id = 'chatTyping';
            el.innerHTML = '<span></span><span></span><span></span>';
            chatMessages.appendChild(el);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function hideTyping() {
            const el = document.getElementById('chatTyping');
            if (el) el.remove();
        }

        function setSending(val) {
            chatSending = val;
            chatSend.style.opacity = val ? '0.5' : '1';
            chatSend.style.pointerEvents = val ? 'none' : '';
            chatInput.disabled = val;
        }

        async function sendMessage(text) {
            if (!text.trim() || chatSending) return;
            appendMsg('user', text);
            chatInput.value = '';
            setSending(true);
            showTyping();

            // Build history for Groq (OpenAI format)
            const apiHistory = chatHistory.map(h => ({
                role: h.role === 'assistant' ? 'assistant' : 'user',
                content: h.content
            }));

            chatHistory.push({ role: 'user', content: text });

            try {
                const res = await fetch(CHATBOT_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: text, history: apiHistory })
                });

                hideTyping();

                if (!res.ok) {
                    const errData = await res.json().catch(() => ({}));
                    throw new Error(errData.error || 'API error');
                }

                const data = await res.json();
                const reply = data.reply || "Sorry, I couldn't process that. Try again!";
                appendMsg('bot', reply);
                chatHistory.push({ role: 'assistant', content: reply });
            } catch (err) {
                hideTyping();
                const msg = err.message.includes('Rate limit')
                    ? "⏳ Too many messages. Please wait a minute and try again."
                    : "Sorry, I couldn't process that. Try again!";
                appendMsg('bot', msg);
            }

            setSending(false);
            chatInput.focus();
        }

        chatBubble.addEventListener('click', toggleChat);
        chatClose.addEventListener('click', toggleChat);

        chatSend.addEventListener('click', () => sendMessage(chatInput.value));
        chatInput.addEventListener('keydown', e => {
            if (e.key === 'Enter' && !e.shiftKey) sendMessage(chatInput.value);
        });

        // Quick-ask chips
        if (chatChips) {
            chatChips.querySelectorAll('.chat-chip').forEach(chip => {
                chip.addEventListener('click', () => sendMessage(chip.dataset.msg));
            });
        }

        // Close with Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && chatOpen) toggleChat();
        });
    }

})();
