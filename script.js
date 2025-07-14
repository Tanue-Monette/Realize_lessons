// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add scroll event listener for navbar background
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'white';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all modules for animation
document.addEventListener('DOMContentLoaded', () => {
    const modules = document.querySelectorAll('.module');
    modules.forEach(module => {
        module.style.opacity = '0';
        module.style.transform = 'translateY(20px)';
        module.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(module);
    });
});

// Interactive code examples
function createInteractiveCode() {
    const codeBlocks = document.querySelectorAll('.code-example pre code');
    
    codeBlocks.forEach(block => {
        // Add syntax highlighting classes
        let html = block.innerHTML;
        
        // Highlight HTML tags
        html = html.replace(/(&lt;[^&]*&gt;)/g, '<span class="tag">$1</span>');
        
        // Highlight CSS properties
        html = html.replace(/([a-zA-Z-]+):/g, '<span class="attribute">$1:</span>');
        
        // Highlight CSS values
        html = html.replace(/:\s*([^;]+);/g, ': <span class="value">$1</span>;');
        
        // Highlight comments
        html = html.replace(/(\/\*[^*]*\*\/)/g, '<span class="comment">$1</span>');
        
        block.innerHTML = html;
    });
}

// Practice exercise interactions
function setupPracticeExercises() {
    // Add click handlers for practice examples
    const practiceCards = document.querySelectorAll('.card-example');
    practiceCards.forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.02)';
            setTimeout(() => {
                card.style.transform = 'scale(1)';
            }, 200);
        });
    });
}

// CSS Variables demonstration
function demonstrateCSSVariables() {
    const varButton = document.querySelector('.css-var-button');
    if (varButton) {
        let colorIndex = 0;
        const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)'];
        
        varButton.addEventListener('click', () => {
            colorIndex = (colorIndex + 1) % colors.length;
            varButton.style.background = colors[colorIndex];
        });
    }
}

// Flexbox interactive demo
function setupFlexboxDemo() {
    const flexDemo = document.querySelector('.flex-demo');
    if (flexDemo) {
        const flexItems = flexDemo.querySelectorAll('.flex-item');
        
        flexItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                item.style.order = index === flexItems.length - 1 ? 0 : index + 1;
            });
        });
    }
}

// Grid interactive demo
function setupGridDemo() {
    const gridDemo = document.querySelector('.grid-demo');
    if (gridDemo) {
        const gridItems = gridDemo.querySelectorAll('.grid-item');
        
        gridItems.forEach(item => {
            item.addEventListener('click', () => {
                const randomColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
                item.style.background = randomColor;
            });
        });
    }
}

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Quiz answer toggle function
function toggleAnswer(element) {
    const answerContent = element.querySelector('.answer-content');
    const answerToggle = element.querySelector('.answer-toggle');
    
    if (answerContent.classList.contains('show')) {
        answerContent.classList.remove('show');
        answerToggle.textContent = 'Click to reveal answer';
    } else {
        answerContent.classList.add('show');
        answerToggle.textContent = 'Click to hide answer';
    }
}

// Initialize all interactive features
document.addEventListener('DOMContentLoaded', () => {
    createInteractiveCode();
    setupPracticeExercises();
    demonstrateCSSVariables();
    setupFlexboxDemo();
    setupGridDemo();
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
    
    // Add hover effects to code examples
    const codeExamples = document.querySelectorAll('.code-example');
    codeExamples.forEach(example => {
        example.addEventListener('mouseenter', () => {
            example.style.transform = 'scale(1.02)';
        });
        
        example.addEventListener('mouseleave', () => {
            example.style.transform = 'scale(1)';
        });
    });
    
    // Add copy functionality to code blocks
    const codeBlocks = document.querySelectorAll('.code-example pre');
    codeBlocks.forEach(block => {
        block.addEventListener('click', () => {
            const text = block.textContent;
            navigator.clipboard.writeText(text).then(() => {
                // Show a temporary "Copied!" message
                const originalContent = block.innerHTML;
                block.innerHTML = '<span style="color: #27ae60;">✓ Copied!</span>';
                setTimeout(() => {
                    block.innerHTML = originalContent;
                }, 2000);
            });
        });
        
        // Add cursor pointer to indicate clickable
        block.style.cursor = 'pointer';
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 1001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

// Add section highlighting in navigation
function highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Initialize section highlighting
highlightActiveSection();

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Update toggle button icon
function updateThemeIcon() {
    const icon = themeToggle.querySelector('i');
    if (html.getAttribute('data-theme') === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

updateThemeIcon();

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon();
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Demo Toggle Functionality
const demoToggle = document.getElementById('demoToggle');
if (demoToggle) {
    demoToggle.addEventListener('change', () => {
        const demoContent = document.querySelector('.dark-mode-demo');
        if (demoToggle.checked) {
            demoContent.setAttribute('data-theme', 'dark');
        } else {
            demoContent.setAttribute('data-theme', 'light');
        }
    });
}

// Add CSS for active nav link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style); 