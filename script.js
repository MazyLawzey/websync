// ===== Theme Toggle =====
(function() {
    const saved = localStorage.getItem('websync-theme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

// ===== Scroll Animations (Intersection Observer) =====
document.addEventListener('DOMContentLoaded', () => {

    // ===== Dark Theme Toggle =====
    const themeToggle = document.getElementById('themeToggle');
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('websync-theme', theme);
    }
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        setTheme(current === 'dark' ? 'light' : 'dark');
    });
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    }, { passive: true });

    // ===== Mobile Nav Toggle =====
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('active');
    });

    // Close mobile nav on link click
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.classList.remove('active');
        });
    });

    // ===== Copy Button =====
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.dataset.copy;
            navigator.clipboard.writeText(text).then(() => {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`;
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 2000);
            });
        });
    });

    // ===== Terminal Typing Effect =====
    const terminalBody = document.querySelector('.terminal-body');
    if (terminalBody) {
        const lines = terminalBody.querySelectorAll('.terminal-line');
        let delay = 0;

        const terminalObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    lines.forEach((line, index) => {
                        line.style.opacity = '0';
                        line.style.transform = 'translateX(-10px)';
                        line.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

                        setTimeout(() => {
                            line.style.opacity = '1';
                            line.style.transform = 'translateX(0)';
                        }, 300 + index * 200);
                    });
                    terminalObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        terminalObserver.observe(terminalBody);
    }

    // ===== Smooth Scroll for Anchor Links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = navbar.offsetHeight + 20;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Parallax Effect on Hero =====
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            if (scrolled < window.innerHeight) {
                heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
            }
        }, { passive: true });
    }

    // ===== Hero Mouse Glow Effect =====
    const heroSection = document.querySelector('.hero');
    const heroMouseGlow = document.getElementById('heroMouseGlow');
    if (heroSection && heroMouseGlow) {
        let rafId = null;
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;

        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;

            if (!rafId) {
                rafId = requestAnimationFrame(updateGlow);
            }
        });

        function updateGlow() {
            currentX += (mouseX - currentX) * 0.15;
            currentY += (mouseY - currentY) * 0.15;

            heroMouseGlow.style.left = currentX + 'px';
            heroMouseGlow.style.top = currentY + 'px';

            if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
                rafId = requestAnimationFrame(updateGlow);
            } else {
                rafId = null;
            }
        }
    }

    // ===== Active Nav Link Highlight =====
    const sections = document.querySelectorAll('section[id]');
    const navLinksAll = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksAll.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--blue-600)';
            }
        });
    }, { passive: true });
});
