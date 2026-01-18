/* ==========================================================================
   JV Martins - Portfolio JavaScript
   Features: i18n, Dynamic Content, Animations, PWA
   ========================================================================== */

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered:', registration.scope);
            })
            .catch(error => {
                console.log('SW registration failed:', error);
            });
    });
}

// Current language state
let currentLang = 'en';

// Current theme state
let currentTheme = 'dark';

/* --------------------------------------------------------------------------
   Theme System (Dark/Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
    // Check for saved preference, default to dark (always dark unless user explicitly chooses light)
    const savedTheme = localStorage.getItem('jv-theme');
    currentTheme = savedTheme || 'dark';

    applyTheme(currentTheme);

    // Set up theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('jv-theme', currentTheme);
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);

    // Update meta theme-color for mobile browsers
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
        metaThemeColor.setAttribute('content', theme === 'dark' ? '#0a0a0b' : '#ffffff');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initNavigation();
    initScrollAnimations();
    initActiveNavLink();
    initContactLinks();
    renderDynamicContent();
    updateDynamicYears();
    updateFormPlaceholders();
    initTypewriter();
});

/* --------------------------------------------------------------------------
   Language / i18n System
   -------------------------------------------------------------------------- */
function initLanguage() {
    // Check for saved language preference or use default
    const savedLang = localStorage.getItem('jv-lang') || siteData.config.defaultLanguage;
    currentLang = savedLang;

    // Set up language toggle buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === currentLang) {
            btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            const newLang = btn.dataset.lang;
            if (newLang !== currentLang) {
                setLanguage(newLang);
            }
        });
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('jv-lang', lang);
    document.documentElement.lang = lang;

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    updateTranslations();
    renderDynamicContent();
    updateDynamicYears();
    updateFormPlaceholders();
    updateTypewriter();
}

/* --------------------------------------------------------------------------
   Dynamic Years Calculation
   -------------------------------------------------------------------------- */
function updateDynamicYears() {
    const startYear = 2016;
    const currentYear = new Date().getFullYear();
    const yearsOfExperience = currentYear - startYear;

    // Update the experience stat number
    const experienceStat = document.querySelector('[data-i18n="hero.stats.experience.number"]');
    if (experienceStat) {
        experienceStat.textContent = '+' + yearsOfExperience;
    }
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translation = getTranslation(key);
        if (translation) {
            el.innerHTML = translation;
        }
    });
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = siteData;

    for (const k of keys) {
        if (value[k] !== undefined) {
            value = value[k];
        } else if (value[currentLang] && value[currentLang][k] !== undefined) {
            value = value[currentLang][k];
        } else if (value['en'] && value['en'][k] !== undefined) {
            // Fallback to English
            value = value['en'][k];
        } else {
            return null;
        }
    }

    // If we ended up at a language object, get the current language value or fallback to English
    if (value && typeof value === 'object') {
        if (value[currentLang]) {
            return value[currentLang];
        } else if (value['en']) {
            return value['en'];
        }
    }

    return value;
}

function t(section, key) {
    if (siteData[section] && siteData[section][currentLang]) {
        const keys = key.split('.');
        let value = siteData[section][currentLang];
        for (const k of keys) {
            if (value[k] !== undefined) {
                value = value[k];
            } else {
                return key;
            }
        }
        return value;
    }
    return key;
}

/* --------------------------------------------------------------------------
   Dynamic Content Rendering
   -------------------------------------------------------------------------- */
function renderDynamicContent() {
    renderAbout();
    renderExperience();
    renderProjects();
    renderWorkTogether();
    renderBlog();
}

function renderAbout() {
    const data = siteData.about[currentLang];

    // Paragraphs
    const paragraphsContainer = document.getElementById('about-paragraphs');
    if (paragraphsContainer) {
        paragraphsContainer.innerHTML = data.paragraphs
            .map(p => `<p>${p}</p>`)
            .join('');
    }

    // Languages
    const languagesList = document.getElementById('languages-list');
    if (languagesList) {
        languagesList.innerHTML = data.languages
            .map(lang => `<span class="language">${lang.name} <small>(${lang.level})</small></span>`)
            .join('');
    }

    // Skills
    const skillsGrid = document.getElementById('skills-grid');
    if (skillsGrid) {
        const skills = data.skills;
        skillsGrid.innerHTML = Object.values(skills)
            .map(category => `
                <div class="skill-category">
                    <h4>${category.title}</h4>
                    <ul>
                        ${category.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
            `)
            .join('');
    }
}

function renderExperience() {
    const data = siteData.experience[currentLang];
    const timeline = document.getElementById('timeline');

    if (timeline) {
        timeline.innerHTML = data.timeline
            .map(exp => `
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="timeline-header">
                            <h3>${exp.company}</h3>
                            <span class="timeline-role">${exp.role}</span>
                            <span class="timeline-period">${exp.period}</span>
                        </div>
                        <div class="timeline-body">
                            <p>${exp.description}</p>
                            <div class="timeline-impacts">
                                <h4>${data.impactsLabel}</h4>
                                <ul>
                                    ${exp.impacts.map(impact => `<li>${impact}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            `)
            .join('');
    }
}

function renderProjects() {
    const data = siteData.projects[currentLang];
    const grid = document.getElementById('projects-grid');

    const icons = {
        lakehouse: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
        pipeline: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`,
        bi: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
        governance: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
    };

    if (grid) {
        grid.innerHTML = data.items
            .map(project => `
                <article class="project-card">
                    <div class="project-icon">
                        ${icons[project.icon] || icons.lakehouse}
                    </div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                    <div class="project-result">
                        <strong>${data.resultLabel}</strong> ${project.result}
                    </div>
                </article>
            `)
            .join('');
    }
}

function renderWorkTogether() {
    const data = siteData.workTogether[currentLang];

    const icons = {
        person: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
        company: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
        partnership: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`
    };

    // Work models
    const modelsContainer = document.getElementById('work-models');
    if (modelsContainer) {
        modelsContainer.innerHTML = data.models
            .map(model => `
                <div class="work-card${model.featured ? ' featured' : ''}">
                    ${model.badge ? `<div class="work-badge">${model.badge}</div>` : ''}
                    <div class="work-icon">
                        ${icons[model.icon] || icons.person}
                    </div>
                    <h3>${model.title}</h3>
                    <p>${model.description}</p>
                    <ul class="work-benefits">
                        ${model.benefits.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                    <span class="work-ideal">${model.ideal}</span>
                </div>
            `)
            .join('');
    }

    // Differentials
    const diffGrid = document.getElementById('diff-grid');
    if (diffGrid) {
        diffGrid.innerHTML = data.differentials
            .map(diff => `
                <div class="diff-item">
                    <span class="diff-number">${diff.number}</span>
                    <h4>${diff.title}</h4>
                    <p>${diff.description}</p>
                </div>
            `)
            .join('');
    }
}

function renderBlog() {
    const data = siteData.blog[currentLang];
    const grid = document.getElementById('blog-grid');

    if (!grid || !data) return;

    const icons = {
        lakehouse: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
        pipeline: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></svg>`,
        bi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>`,
        article: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
    };

    if (data.articles && data.articles.length > 0) {
        grid.innerHTML = data.articles.map(article => `
            <a href="${article.url}" class="blog-card" ${article.url !== '#' ? 'target="_blank"' : ''}>
                <div class="blog-card-header">
                    <div class="blog-card-icon">
                        ${icons[article.icon] || icons.article}
                    </div>
                    <div class="blog-card-meta">
                        <span class="blog-card-date">${article.date}</span>
                        <span class="blog-card-read-time">${article.readTime} ${data.readTime}</span>
                    </div>
                </div>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="blog-card-tags">
                    ${article.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
            </a>
        `).join('');
    } else {
        grid.innerHTML = `
            <div class="blog-empty">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <p>${data.comingSoon}</p>
            </div>
        `;
    }
}

/* --------------------------------------------------------------------------
   Contact Links
   -------------------------------------------------------------------------- */
function initContactLinks() {
    const config = siteData.config;
    const whatsappUrl = `https://wa.me/${config.whatsapp}`;
    const emailUrl = `mailto:${config.email}`;

    // WhatsApp buttons
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const whatsappFloat = document.getElementById('whatsapp-float');
    if (whatsappBtn) whatsappBtn.href = whatsappUrl;
    if (whatsappFloat) whatsappFloat.href = whatsappUrl;

    // Email button
    const emailBtn = document.getElementById('email-btn');
    if (emailBtn) emailBtn.href = emailUrl;

    // LinkedIn buttons
    const linkedinBtn = document.getElementById('linkedin-btn');
    const footerLinkedin = document.getElementById('footer-linkedin');
    if (linkedinBtn) linkedinBtn.href = config.linkedin;
    if (footerLinkedin) footerLinkedin.href = config.linkedin;

    // GitHub
    const footerGithub = document.getElementById('footer-github');
    if (footerGithub) footerGithub.href = config.github;

    // Calendly
    const calendlyBtn = document.getElementById('calendly-btn');
    if (calendlyBtn && config.calendly) {
        calendlyBtn.href = config.calendly;
    }
}

/* --------------------------------------------------------------------------
   Form Placeholder i18n
   -------------------------------------------------------------------------- */
function updateFormPlaceholders() {
    const data = siteData.workTogether[currentLang];

    // Update placeholders with translations
    const formFields = {
        'name': data.formName,
        'email': data.formEmail,
        'company': data.formCompany,
        'message': data.formMessage
    };

    Object.entries(formFields).forEach(([name, placeholder]) => {
        const field = document.querySelector(`[name="${name}"]`);
        if (field && placeholder) {
            field.placeholder = placeholder;
        }
    });
}

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

    // Re-observe after dynamic content is rendered
    setTimeout(() => {
        const animateElements = document.querySelectorAll(
            '.timeline-item, .project-card, .work-card, .skill-category, .diff-item'
        );
        animateElements.forEach(el => {
            el.classList.add('animate-element');
            observer.observe(el);
        });
    }, 100);

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
   Stats Counter Animation
   -------------------------------------------------------------------------- */
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = counter.textContent;
        const hasPlus = target.includes('+');
        const number = parseInt(target.replace(/\D/g, ''));

        if (isNaN(number)) return;

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

/* --------------------------------------------------------------------------
   Contact Form Submission
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;

            // Show loading state
            submitBtn.innerHTML = '<span>Sending...</span>';
            submitBtn.disabled = true;

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.textContent = currentLang === 'pt'
                        ? 'Mensagem enviada com sucesso!'
                        : 'Message sent successfully!';
                    status.className = 'form-status success';
                    form.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                status.textContent = currentLang === 'pt'
                    ? 'Erro ao enviar. Tente novamente.'
                    : 'Error sending. Please try again.';
                status.className = 'form-status error';
            }

            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            // Clear status after 5 seconds
            setTimeout(() => {
                status.textContent = '';
                status.className = 'form-status';
            }, 5000);
        });
    }
});

/* --------------------------------------------------------------------------
   Typewriter Animation
   -------------------------------------------------------------------------- */
let typewriterInstance = null;

function initTypewriter() {
    const element = document.getElementById('typewriter');
    if (!element) return;

    const words = siteData.hero[currentLang].typewriterWords || [
        siteData.hero[currentLang].subtitle
    ];

    typewriterInstance = new Typewriter(element, words);
    typewriterInstance.start();
}

class Typewriter {
    constructor(element, words, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
        this.element = element;
        this.words = words;
        this.typingSpeed = typingSpeed;
        this.deletingSpeed = deletingSpeed;
        this.pauseTime = pauseTime;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
        this.isRunning = false;
    }

    start() {
        this.isRunning = true;
        this.type();
    }

    stop() {
        this.isRunning = false;
    }

    updateWords(newWords) {
        this.words = newWords;
        this.wordIndex = 0;
        this.charIndex = 0;
        this.isDeleting = false;
    }

    type() {
        if (!this.isRunning) return;

        const currentWord = this.words[this.wordIndex];

        if (this.isDeleting) {
            this.element.textContent = currentWord.substring(0, this.charIndex - 1);
            this.charIndex--;
        } else {
            this.element.textContent = currentWord.substring(0, this.charIndex + 1);
            this.charIndex++;
        }

        let delay = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

        if (!this.isDeleting && this.charIndex === currentWord.length) {
            delay = this.pauseTime;
            this.isDeleting = true;
        } else if (this.isDeleting && this.charIndex === 0) {
            this.isDeleting = false;
            this.wordIndex = (this.wordIndex + 1) % this.words.length;
            delay = 500;
        }

        setTimeout(() => this.type(), delay);
    }
}

// Update typewriter when language changes
function updateTypewriter() {
    if (typewriterInstance) {
        const words = siteData.hero[currentLang].typewriterWords || [
            siteData.hero[currentLang].subtitle
        ];
        typewriterInstance.updateWords(words);
    }
}

/* --------------------------------------------------------------------------
   GitHub API Integration
   -------------------------------------------------------------------------- */
const GITHUB_USERNAME = 'mrtinsjoao';
const GITHUB_CACHE_KEY = 'jv-github-data';
const GITHUB_CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

async function loadGitHubData() {
    // Check cache first
    const cached = localStorage.getItem(GITHUB_CACHE_KEY);
    if (cached) {
        const { data, timestamp } = JSON.parse(cached);
        if (Date.now() - timestamp < GITHUB_CACHE_DURATION) {
            renderGitHubData(data);
            return;
        }
    }

    try {
        // Fetch user data and repos in parallel
        const [userRes, reposRes] = await Promise.all([
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
            fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error('GitHub API error');

        const user = await userRes.json();
        const repos = await reposRes.json();

        // Calculate total stars
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

        const data = {
            user,
            repos,
            totalStars
        };

        // Cache the data
        localStorage.setItem(GITHUB_CACHE_KEY, JSON.stringify({
            data,
            timestamp: Date.now()
        }));

        renderGitHubData(data);
    } catch (error) {
        console.error('Failed to load GitHub data:', error);
        document.getElementById('github-repos-grid').innerHTML =
            '<p style="text-align: center; color: var(--color-text-muted);">Unable to load GitHub data</p>';
    }
}

function renderGitHubData(data) {
    const { user, repos, totalStars } = data;

    // Update stats
    document.getElementById('github-repos').textContent = user.public_repos;
    document.getElementById('github-stars').textContent = totalStars;
    document.getElementById('github-followers').textContent = user.followers;

    // Language colors
    const langColors = {
        'JavaScript': '#f1e05a',
        'TypeScript': '#3178c6',
        'Python': '#3572A5',
        'HTML': '#e34c26',
        'CSS': '#563d7c',
        'Shell': '#89e051',
        'Java': '#b07219',
        'Go': '#00ADD8',
        'Rust': '#dea584',
        'SQL': '#e38c00'
    };

    // Render repo cards
    const reposGrid = document.getElementById('github-repos-grid');
    reposGrid.innerHTML = repos
        .filter(repo => !repo.fork) // Only show non-forked repos
        .slice(0, 6)
        .map(repo => `
            <a href="${repo.html_url}" target="_blank" class="github-repo-card">
                <h4>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                    ${repo.name}
                </h4>
                <p>${repo.description || 'No description available'}</p>
                <div class="github-repo-meta">
                    ${repo.language ? `
                        <span>
                            <span class="github-repo-lang" style="background: ${langColors[repo.language] || '#ccc'}"></span>
                            ${repo.language}
                        </span>
                    ` : ''}
                    <span>⭐ ${repo.stargazers_count}</span>
                    <span>🍴 ${repo.forks_count}</span>
                </div>
            </a>
        `).join('');
}

// Load GitHub data on page load
document.addEventListener('DOMContentLoaded', loadGitHubData);
