/**
 * MUSTAFA ELECTRICAL ENGINEERING PORTFOLIO - BEHAVIOR LOGIC
 * Includes: Theme Toggling, Sticky Header, ScrollSpy, Mobile Menu, Contact Form Validation, and Scroll Reveal.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    // 1. Theme Toggle Logic (Light / Dark Mode)
    // ==========================================
    const themeToggleBtn = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    // Set initial theme based on local storage or system preference
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    } else {
        // System preference fallback (default to dark if system prefers dark)
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = prefersDark ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', defaultTheme);
    }
    
    themeToggleBtn.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            theme = 'light';
        } else {
            theme = 'dark';
        }
        
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    });

    // ==========================================
    // 2. Mobile Navigation Menu Toggle
    // ==========================================
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const toggleMenu = () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    };
    
    const closeMenu = () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    };
    
    mobileMenuToggle.addEventListener('click', toggleMenu);
    
    // Close mobile menu when clicking on any nav link
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // ==========================================
    // 3. Sticky Navbar & Back-to-Top Visibility
    // ==========================================
    const navbar = document.getElementById('navbar');
    const backToTopBtn = document.getElementById('back-to-top');
    
    const handleScrollEffects = () => {
        const scrollPosition = window.scrollY;
        
        // Sticky Navbar state
        if (scrollPosition > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Back to Top button visibility
        if (scrollPosition > 500) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    };
    
    window.addEventListener('scroll', handleScrollEffects);
    // Trigger scroll check on load to prevent navbar rendering mismatch
    handleScrollEffects();

    // Scroll to Top action
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ==========================================
    // 4. ScrollSpy (Active Navigation Link on Scroll)
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    const scrollSpy = () => {
        const currentScroll = window.scrollY + 120; // Offset for header height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.add('active');
            } else {
                document.querySelector(`.nav-menu a[href*=${sectionId}]`)?.classList.remove('active');
            }
        });
    };
    
    window.addEventListener('scroll', scrollSpy);
    // Run ScrollSpy on load to highlight initial home link
    scrollSpy();

    // ==========================================
    // 5. Scroll Reveal Animations (Intersection Observer)
    // ==========================================
    // Attach reveal classes to sections and key items programmatically
    const itemsToReveal = [
        '.section-header',
        '.hero-profile-area',
        '.hero-content',
        '.about-content',
        '.about-image-wrapper',
        '.skill-card',
        '.project-card',
        '.contact-info-side',
        '.contact-form-side'
    ];
    
    itemsToReveal.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => el.classList.add('reveal'));
    });
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Unobserve after animating once to lock state
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is in full view
    });
    
    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // 6. Contact Form Submission Handling
    // ==========================================
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Extract field values
        const nameVal = document.getElementById('form-name').value.trim();
        const emailVal = document.getElementById('form-email').value.trim();
        const messageVal = document.getElementById('form-message').value.trim();
        
        // Simple form validation check
        if (!nameVal || !emailVal || !messageVal) {
            formStatus.textContent = 'Please fill out all fields.';
            formStatus.className = 'form-status-msg error';
            return;
        }
        
        // Mock successful email message submission
        formStatus.textContent = `Thank you, ${nameVal}! Your message has been sent successfully.`;
        formStatus.className = 'form-status-msg success';
        
        // Reset form inputs after delay
        contactForm.reset();
        
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    });
});
