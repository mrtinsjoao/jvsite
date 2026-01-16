/* ==========================================================================
   JV Martins - Portfolio JavaScript
   Features: i18n, Dynamic Content, Animations
   ========================================================================== */

// Current language state
let currentLang = 'en';

document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initScrollAnimations();
    initActiveNavLink();
    initContactLinks();
    renderDynamicContent();
    updateDynamicYears();
    updateFormPlaceholders();
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
        } else {
            return null;
        }
    }

    // If we ended up at a language object, get the current language value
    if (value && typeof value === 'object' && value[currentLang]) {
        return value[currentLang];
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
