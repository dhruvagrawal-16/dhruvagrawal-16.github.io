/* ═══════════════════════════════════════════════════════════════
   GSAP + ScrollTrigger — Premium Animations
   Pinned horizontal scroll · Parallax · Spring physics · Stagger
   ═══════════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    // Wait for GSAP to load
    function initGSAP() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            setTimeout(initGSAP, 100);
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        // ── Override CSS reveal-up with GSAP ──
        // Remove CSS transition so GSAP takes over
        document.querySelectorAll('.reveal-up').forEach(el => {
            el.style.transition = 'none';
        });

        // ── Staggered Section Reveals ──
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const els = section.querySelectorAll('.reveal-up');
            if (els.length === 0) return;

            gsap.set(els, { opacity: 0, y: 50 });

            ScrollTrigger.create({
                trigger: section,
                start: 'top 80%',
                once: true,
                onEnter: () => {
                    gsap.to(els, {
                        opacity: 1,
                        y: 0,
                        duration: 0.9,
                        stagger: 0.08,
                        ease: 'back.out(1.4)',
                        overwrite: true
                    });
                }
            });
        });

        // ── Hero Entrance ──
        const heroEls = document.querySelectorAll('.hero .reveal-up');
        if (heroEls.length) {
            gsap.set(heroEls, { opacity: 0, y: 60 });
            // Delay to let cinematic intro finish
            gsap.to(heroEls, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.12,
                ease: 'elastic.out(1, 0.75)',
                delay: 3.2
            });
        }

        // ── Hero Parallax on Scroll ──
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            gsap.to(heroContent, {
                y: 150,
                opacity: 0.2,
                ease: 'none',
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1
                }
            });
        }

        // ── Photo Float ──
        const heroPhoto = document.querySelector('.hero-photo-wrap');
        if (heroPhoto) {
            gsap.to(heroPhoto, {
                y: -15,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }

        // ── Stats Counter with GSAP ──
        const statNums = document.querySelectorAll('.stat-num[data-count]');
        if (statNums.length) {
            ScrollTrigger.create({
                trigger: '.stats-row',
                start: 'top 80%',
                once: true,
                onEnter: () => {
                    statNums.forEach(el => {
                        const target = parseInt(el.dataset.count);
                        gsap.to(el, {
                            innerText: target,
                            duration: 2,
                            snap: { innerText: 1 },
                            ease: 'power2.out',
                            onUpdate: function() {
                                el.textContent = Math.round(parseFloat(el.textContent));
                            }
                        });
                    });
                }
            });
        }

        // ── Skill Bars with Elastic Overshoot ──
        const skillSection = document.querySelector('#skills');
        if (skillSection) {
            const bars = skillSection.querySelectorAll('.sbar-fill');
            ScrollTrigger.create({
                trigger: skillSection,
                start: 'top 70%',
                once: true,
                onEnter: () => {
                    bars.forEach((bar, i) => {
                        const w = bar.dataset.width;
                        gsap.to(bar, {
                            width: w + '%',
                            duration: 1.2,
                            delay: i * 0.06,
                            ease: 'elastic.out(1, 0.6)'
                        });
                    });
                }
            });
        }

        // ── Experience Timeline Line ──
        const expFill = document.querySelector('.exp-line-fill');
        if (expFill) {
            gsap.to(expFill, {
                height: '100%',
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.exp-timeline',
                    start: 'top 70%',
                    once: true
                }
            });
        }

        // ── Experience Cards Slide In ──
        document.querySelectorAll('.exp-card').forEach((card, i) => {
            gsap.from(card, {
                x: -40,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.2,
                ease: 'back.out(1.2)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    once: true
                }
            });
        });

        // ── Project Cards Stagger ──
        document.querySelectorAll('.project-card-v2').forEach((card, i) => {
            gsap.from(card, {
                y: 80,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'back.out(1.3)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    once: true
                }
            });
        });

        // ── Pinned Horizontal Scroll Showcase ──
        const hscrollOuter = document.querySelector('.hscroll-outer');
        const hscrollTrack = document.getElementById('hscrollTrack');

        if (hscrollOuter && hscrollTrack) {
            const cards = hscrollTrack.querySelectorAll('.hscroll-card');
            const totalWidth = cards.length * 320; // card width + gap

            gsap.to(hscrollTrack, {
                x: () => -(totalWidth - window.innerWidth + 120),
                ease: 'none',
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: () => '+=' + totalWidth,
                    pin: true,
                    scrub: 1,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });

            // Stagger card entrance
            cards.forEach((card, i) => {
                gsap.from(card, {
                    scale: 0.85,
                    opacity: 0,
                    rotateY: -15,
                    duration: 0.6,
                    delay: i * 0.05,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: '#showcase',
                        start: 'top 60%',
                        once: true
                    }
                });
            });
        }

        // ── Tool Items Pop In ──
        const toolsSection = document.querySelector('#tools');
        if (toolsSection) {
            const toolItems = toolsSection.querySelectorAll('.tool-item');
            gsap.set(toolItems, { scale: 0, opacity: 0, rotation: -10 });
            ScrollTrigger.create({
                trigger: '#tools',
                start: 'top 80%',
                once: true,
                onEnter: () => {
                    gsap.to(toolItems, {
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        duration: 0.5,
                        stagger: 0.06,
                        ease: 'back.out(2)',
                        overwrite: true
                    });
                }
            });
        }

        // ── Fun Facts Bounce In ──
        document.querySelectorAll('.ff-card').forEach((card, i) => {
            gsap.from(card, {
                y: 60,
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                delay: i * 0.08,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                    trigger: '#funfacts',
                    start: 'top 75%',
                    once: true
                }
            });
        });

        // ── Blog Cards Slide Up ──
        document.querySelectorAll('.blog-card').forEach((card, i) => {
            gsap.from(card, {
                y: 50,
                opacity: 0,
                duration: 0.7,
                delay: i * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '#blog',
                    start: 'top 80%',
                    once: true
                }
            });
        });

        // ── Education Cards Flip In ──
        document.querySelectorAll('.edu-card').forEach((card, i) => {
            gsap.from(card, {
                rotateX: -20,
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.15,
                ease: 'back.out(1.4)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    once: true
                }
            });
        });

        // ── Cert Chips Stagger ──
        const certChips = document.querySelectorAll('.cert-chip');
        if (certChips.length) {
            gsap.from(certChips, {
                x: -30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: 'back.out(1.5)',
                scrollTrigger: {
                    trigger: '.certs-row',
                    start: 'top 85%',
                    once: true
                }
            });
        }

        // ── Contact Cards Pop ──
        document.querySelectorAll('.contact-card-v2').forEach((card, i) => {
            gsap.from(card, {
                scale: 0.8,
                opacity: 0,
                duration: 0.5,
                delay: i * 0.08,
                ease: 'back.out(1.8)',
                scrollTrigger: {
                    trigger: '.contact-grid',
                    start: 'top 85%',
                    once: true
                }
            });
        });

        // ── Marquee Speed Boost on Scroll ──
        const marqueeTrack = document.querySelector('.marquee-track');
        if (marqueeTrack) {
            ScrollTrigger.create({
                trigger: '.marquee-section',
                start: 'top bottom',
                end: 'bottom top',
                onUpdate: (self) => {
                    const speed = 30 - (self.progress * 15);
                    marqueeTrack.style.animationDuration = speed + 's';
                }
            });
        }

        // ── Smooth Section Dividers ──
        document.querySelectorAll('.section-label').forEach(label => {
            gsap.from(label, {
                x: -40,
                opacity: 0,
                duration: 0.6,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: label,
                    start: 'top 90%',
                    once: true
                }
            });
        });

        document.querySelectorAll('.section-heading').forEach(heading => {
            gsap.from(heading, {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: heading,
                    start: 'top 88%',
                    once: true
                }
            });
        });

        // ── Refresh on resize ──
        window.addEventListener('resize', () => {
            ScrollTrigger.refresh();
        });

        console.log('%c✨ GSAP + ScrollTrigger loaded', 'font-size: 12px; color: #00e88f;');
    }

    initGSAP();
});
