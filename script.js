/* ==========================================================================
   JV Martins - Portfolio JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollAnimations();
    initActiveNavLink();
});

/* --------------------------------------------------------------------------
   Navigation
   -------------------------------------------------------------------------- */
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Smooth scroll for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

/* --------------------------------------------------------------------------
   Active Navigation Link
   -------------------------------------------------------------------------- */
function initActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateActiveLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}

/* --------------------------------------------------------------------------
   Scroll Animations
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements to animate
    const animateElements = document.querySelectorAll(
        '.timeline-item, .project-card, .work-card, .skill-category, .diff-item'
    );

    animateElements.forEach(el => {
        el.classList.add('animate-element');
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .animate-element.animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        .timeline-item.animate-element { transition-delay: 0.1s; }
        .project-card.animate-element:nth-child(1) { transition-delay: 0s; }
        .project-card.animate-element:nth-child(2) { transition-delay: 0.1s; }
        .project-card.animate-element:nth-child(3) { transition-delay: 0.2s; }
        .project-card.animate-element:nth-child(4) { transition-delay: 0.3s; }
        .work-card.animate-element:nth-child(1) { transition-delay: 0s; }
        .work-card.animate-element:nth-child(2) { transition-delay: 0.15s; }
        .work-card.animate-element:nth-child(3) { transition-delay: 0.3s; }
        .skill-category.animate-element:nth-child(1) { transition-delay: 0s; }
        .skill-category.animate-element:nth-child(2) { transition-delay: 0.1s; }
        .skill-category.animate-element:nth-child(3) { transition-delay: 0.2s; }
        .skill-category.animate-element:nth-child(4) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);
}

/* --------------------------------------------------------------------------
   Navbar Background on Scroll
   -------------------------------------------------------------------------- */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 11, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 11, 0.8)';
    }
});

/* --------------------------------------------------------------------------
   Typing Effect (Optional - for hero title)
   -------------------------------------------------------------------------- */
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

/* --------------------------------------------------------------------------
   Stats Counter Animation
   -------------------------------------------------------------------------- */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = counter.textContent;
        const hasPlus = target.includes('+');
        const number = parseInt(target.replace(/\D/g, ''));

        let current = 0;
        const increment = number / 50;
        const duration = 1500;
        const stepTime = duration / 50;

        const updateCounter = () => {
            current += increment;
            if (current < number) {
                counter.textContent = (hasPlus ? '+' : '') + Math.floor(current);
                setTimeout(updateCounter, stepTime);
            } else {
                counter.textContent = target;
            }
        };

        // Trigger when element is visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
}

// Initialize counter animation
document.addEventListener('DOMContentLoaded', animateCounters);
