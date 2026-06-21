// ==========================================================================
// CORE LAYOUT MATRIX RUNTIME PIPELINES
// ==========================================================================

// --- 1. Mobile Menu Engine & Smooth Anchor Routing ---
function toggleMenu() {
    const navLinks = document.getElementById('links');
    navLinks.classList.toggle('show');
}

document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        document.getElementById('links').classList.remove('show');
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            e.preventDefault();
            const headerOffset = 80; 
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// --- 2. THE NEW SCROLL REVEAL (HIDE & APPEAR) ENGINE ---
document.addEventListener('DOMContentLoaded', () => {
    const elementsToReveal = document.querySelectorAll(
        '.section-title, .about-card, .timeline-item, .skill-node, .project-card, .contact-card, .photo-container'
    );

    elementsToReveal.forEach(el => {
        el.classList.add('reveal-on-scroll');
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible'); 
            }
        });
    }, {
        root: null,
        threshold: 0.15, 
        rootMargin: "0px 0px -40px 0px" 
    });

    elementsToReveal.forEach(el => revealObserver.observe(el));
});

// --- 3. Advanced 3D Interactive Mouse-Tilt Mechanism ---
const interactiveCards = document.querySelectorAll('.tilt-card');

interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const boundingBox = card.getBoundingClientRect();
        const axisX = e.clientX - boundingBox.left;
        const axisY = e.clientY - boundingBox.top;
        
        const tiltX = (boundingBox.height / 2 - axisY) / (boundingBox.height / 2) * 10;
        const tiltY = (axisX - boundingBox.width / 2) / (boundingBox.width / 2) * 10;
        
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
});

function tiltLogoText(event) {
    const logoContainer = event.currentTarget;
    const bounds = logoContainer.getBoundingClientRect();
    const coordinateX = event.clientX - bounds.left;
    const coordinateY = event.clientY - bounds.top;
    
    const maxTiltRotation = 15;
    const rotationalY = ((coordinateX / bounds.width) - 0.5) * maxTiltRotation;
    const rotationalX = (0.5 - (coordinateY / bounds.height)) * maxTiltRotation;
    
    logoContainer.style.transform = `rotateX(${rotationalX}deg) rotateY(${rotationalY}deg) scale(1.02)`;
}

function resetLogoText() {
    const logoContainer = document.querySelector('.interactive-logo-text');
    if (logoContainer) {
        logoContainer.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
    }
}

// --- 4. Relational Database Content Engine for Projects ---
const localProjectRecords = {
  'portfolio': {
        title: "Personal Portfolio Workspace",
        image: "satya21.jpg",
        desc: "An ultra-modern, single-page developer deployment featuring native JavaScript 3D perspective manipulation, a custom animated intro preloader, and a navigation scroll spy engine. Built with crisp glassmorphism modular layouts and optimization structures to track active visitor metrics smoothly.",
        badges: ["HTML5 / CSS3", "Vanilla JavaScript Core", "3D Kinetic Physics", "DOM API Manipulation"],
        live: "https://satyaganesh21.github.io/satyaganesh21/",
        repo: "https://github.com/satyaganesh21/satyaganesh21"
    },
    'data-analytics': {
        title: "Data Analytics & Tableau Ecosystem",
        image: "satya212.png",
        desc: "Advanced data intelligence framework developed during my APSCHE Data Analytics virtual internship to analyze, clean, and visualize complex industrial trends. This ecosystem converts raw business data into actionable strategic insights through automated processing and interactive visual discovery.\n\n📊 Core Project Milestones:\n• Data Preprocessing: Utilized Python data structures and analytical scripting to clean messy source datasets, handle missing values, and parse complex database profiles.\n• Enterprise Dashboarding: Designed and deployed multi-tiered business intelligence views in Tableau Desktop to track live high-level performance metrics and trends.",
        badges: ["Tableau Desktop", "Data Analysis", "Python Scripting", "Data Structures (DSA)"],
        live: "https://github.com/satyaganesh21/satyaganesh2121",
        repo: "https://github.com/satyaganesh21/satyaganesh2121"
    },
    'ecommerce': {
        title: "Sweetshop & E-Commerce Web Page",
        image: "satya213.jpg",
        desc: "A beautiful, fully responsive local sweetshop and confectionery web application designed to showcase product catalogs with smooth interactive menus. Handcrafted using clean semantic HTML5, modern CSS3 layout structures, and core ES6 JavaScript.",
        badges: ["HTML5", "CSS3 Layouts", "JavaScript Core ES6", "Responsive Design"],
        live: "https://satyaganesh21.github.io/sweetshop/",
        repo: "https://github.com/satyaganesh21/sweetshop"
    },
};

function openProjectModal(keyId) {
    const dataNode = localProjectRecords[keyId];
    if (!dataNode) return;
    
    document.getElementById('modal-title').innerText = dataNode.title;
    document.getElementById('modal-img').src = dataNode.image;
    document.getElementById('modal-desc').innerText = dataNode.desc;
    
    const badgeRow = document.getElementById('modal-badges');
    badgeRow.innerHTML = '';
    dataNode.badges.forEach(text => {
        const spanNode = document.createElement('span');
        spanNode.className = 'tech-badge';
        spanNode.innerText = text;
        badgeRow.appendChild(spanNode);
    });
    
    document.getElementById('modal-live-link').href = dataNode.live;
    document.getElementById('modal-repo-link').href = dataNode.repo;
    document.getElementById('project-modal').classList.add('active');
}

function closeProjectModal(event) {
    const targetOverlay = document.getElementById('project-modal');
    if (event.target === targetOverlay) {
        targetOverlay.classList.remove('active');
    }
}

// --- 5. Project Portfolio Category Filter Pipeline ---
function filterProjects(selectedCategory) {
    const allFilterButtons = document.querySelectorAll('.filter-btn');
    allFilterButtons.forEach(btn => btn.classList.remove('active'));
    
    if (window.event && window.event.currentTarget) {
        window.event.currentTarget.classList.add('active');
    }
    
    const allProjectCards = document.querySelectorAll('.project-card');
    allProjectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (selectedCategory === 'all' || cardCategory === selectedCategory) {
            card.classList.remove('filter-hide');
        } else {
            card.classList.add('filter-hide');
        }
    });
}

// ==========================================================================
// INTEGRATED AI SUITE CONFIGURATIONS
// ==========================================================================

const structuralBiographies = {
    human: `<p class="self-desc dynamic-fade">
               I'm a highly motivated and detail-oriented computer science student with a deep passion for modern frontend engineering and data insights. As a quick learner, I enjoy tackling architectural challenges, designing intuitive interfaces, and breaking down complex problems.
            </p>`,
    ai: `<ul class="ai-bullet-list dynamic-fade">
            <li><strong>Technical Track:</strong> Specializing in computer science engineering with deep competencies in frontend architectures and relational data visualization frameworks.</li>
            <li><strong>Core Competency:</strong> Proficient in designing scalable user interfaces with native JavaScript optimization and multi-tiered responsive styling layout structures.</li>
         </ul>`
};

function toggleBioView() {
    const displayBox = document.getElementById('bio-display-box');
    const toggleSwitch = document.getElementById('ai-bio-switch');
    
    if (toggleSwitch.checked) {
        displayBox.innerHTML = structuralBiographies.ai;
    } else {
        displayBox.innerHTML = structuralBiographies.human;
    }
}

function analyzeMessageSentiment() {
    const currentText = document.getElementById('contact-msg-input').value.trim();
    const meterBox = document.getElementById('ai-sentiment-meter');
    const meterText = document.getElementById('sentiment-text');
    
    if (currentText.length < 5) {
        meterBox.style.borderColor = "var(--glass-border)";
        meterBox.style.boxShadow = "none";
        meterText.innerText = "AI Tone Engine Idle";
        meterText.style.color = "var(--text-muted)";
        return;
    }

    const optimisticTokens = ['hire', 'interview', 'love', 'great', 'awesome', 'good', 'project', 'work', 'opportunity'];
    const lowerText = currentText.toLowerCase();
    
    let matchCounter = 0;
    optimisticTokens.forEach(token => {
        if (lowerText.includes(token)) matchCounter++;
    });

    if (matchCounter > 0) {
        meterBox.style.borderColor = "var(--accent-cyan)";
        meterBox.style.boxShadow = "0 0 10px rgba(59, 130, 246, 0.3)";
        meterText.innerText = "🌟 Highly Positive Intent";
        meterText.style.color = "var(--accent-cyan)";
    } else {
        meterBox.style.borderColor = "var(--primary-color)";
        meterBox.style.boxShadow = "0 0 10px rgba(6, 182, 212, 0.3)";
        meterText.innerText = "💼 Professional / Neutral";
        meterText.style.color = "var(--primary-color)";
    }
}

function runAISemanticSearch() {
    const searchVal = document.getElementById('ai-project-search').value.trim().toLowerCase();
    const feedbackTag = document.getElementById('ai-search-feedback');
    
    const cardPortfolio = document.getElementById('project-card-portfolio');
    const cardData = document.getElementById('project-card-data-analytics');
    const cardEcommerce = document.getElementById('project-card-ecommerce');
    const allCards = [cardPortfolio, cardData, cardEcommerce];
    
    if (!searchVal) {
        allCards.forEach(card => card.classList.remove('ai-dimmed', 'ai-matched'));
        feedbackTag.innerText = "AI Semantic Engine Idle";
        feedbackTag.style.color = "var(--text-muted)";
        return;
    }

    const intentWeights = {
        portfolio: ['portfolio', 'workspace', 'site', 'cv', 'profile', '3d'],
        dataAnalytics: ['data', 'analytics', 'tableau', 'python', 'dashboard', 'charts'],
        ecommerce: ['sweetshop', 'shop', 'ecommerce', 'store', 'business']
    };

    let matchedKey = null;
    if (intentWeights.portfolio.some(token => searchVal.includes(token))) matchedKey = 'portfolio';
    else if (intentWeights.dataAnalytics.some(token => searchVal.includes(token))) matchedKey = 'dataAnalytics';
    else if (intentWeights.ecommerce.some(token => searchVal.includes(token))) matchedKey = 'ecommerce';

    if (matchedKey) {
        allCards.forEach(card => card.classList.add('ai-dimmed'));
        if (matchedKey === 'portfolio') {
            cardPortfolio.classList.remove('ai-dimmed'); cardPortfolio.classList.add('ai-matched');
            feedbackTag.innerText = "✨ Matched Developer Profile"; feedbackTag.style.color = "var(--primary-color)";
        } else if (matchedKey === 'dataAnalytics') {
            cardData.classList.remove('ai-dimmed'); cardData.classList.add('ai-matched');
            feedbackTag.innerText = "📊 Matched Analytics Platform"; feedbackTag.style.color = "var(--primary-color)";
        } else if (matchedKey === 'ecommerce') {
            cardEcommerce.classList.remove('ai-dimmed'); cardEcommerce.classList.add('ai-matched');
            feedbackTag.innerText = "🛍️ Matched E-Commerce System"; feedbackTag.style.color = "var(--accent-cyan)";
        }
    } else {
        allCards.forEach(card => { card.classList.add('ai-dimmed'); card.classList.remove('ai-matched'); });
        feedbackTag.innerText = "🤖 Processing Intent..."; feedbackTag.style.color = "var(--accent-cyan)";
    }
}

const aiKnowledgeBase = {
    skills: "Here is a quick look at my tech stack! 💪\n\n• Frontend: HTML5, CSS3, JavaScript (ES6+), and React.js\n• Data Core: Python scripting & Data Structures (DSA)\n• Analytics: Tableau Desktop",
    projects: "I've built a few cool things you can check out right here on my profile! 🚀\n\n1. This Portfolio Workspace\n2. Tableau Analytics Framework\n3. Sweetshop E-Commerce",
    availability: "I'm actively looking for fresh engineering roles and data analytics collaborations! 💼\n\n• 📱 Call/WhatsApp: +91 7396737874\n• 📧 Drop a message in the contact form right below!",
    default: "Got it! 👍 I'm Satya's AI Twin. Try asking me about:\n• His technical skills stack 🛠️\n• His recent projects 💻\n• His job availability 📞"
};

function toggleChatWindow() {
    const chatWin = document.getElementById('chat-window');
    chatWin.classList.toggle('active');
    const dot = document.querySelector('.trigger-alert-dot');
    if (dot) dot.style.display = 'none';
}

function sendChatMessage() {
    const queryInput = document.getElementById('chat-user-query');
    const displayPanel = document.getElementById('chat-stream-box');
    const currentQuery = queryInput.value.trim();
    if (!currentQuery) return;
    
    const userBubble = document.createElement('div');
    userBubble.className = "user-msg msg-row";
    userBubble.innerText = currentQuery;
    displayPanel.appendChild(userBubble);
    queryInput.value = '';
    displayPanel.scrollTop = displayPanel.scrollHeight;
    
    setTimeout(() => {
        const loadBubble = document.createElement('div');
        loadBubble.className = "system-msg msg-row loader-bubble";
        loadBubble.innerText = "AI Twin is formulating reply...";
        displayPanel.appendChild(loadBubble);
        displayPanel.scrollTop = displayPanel.scrollHeight;
        
        let finalResponse = aiKnowledgeBase.default;
        const normalizedInput = currentQuery.toLowerCase();
        
        if (normalizedInput.includes('skill') || normalizedInput.includes('code')) finalResponse = aiKnowledgeBase.skills;
        else if (normalizedInput.includes('project') || normalizedInput.includes('work')) finalResponse = aiKnowledgeBase.projects;
        else if (normalizedInput.includes('job') || normalizedInput.includes('contact')) finalResponse = aiKnowledgeBase.availability;
        
        setTimeout(() => {
            loadBubble.remove();
            const systemBubble = document.createElement('div');
            systemBubble.className = "system-msg msg-row";
            displayPanel.appendChild(systemBubble);
            
            let pointerIndex = 0;
            function typeStringRunner() {
                if (pointerIndex < finalResponse.length) {
                    systemBubble.textContent += finalResponse.charAt(pointerIndex);
                    pointerIndex++;
                    displayPanel.scrollTop = displayPanel.scrollHeight;
                    setTimeout(typeStringRunner, 12);
                }
            }
            typeStringRunner();
        }, 1000);
    }, 400);
}

function showTagMetric(clickedTag) {
    const metadata = clickedTag.getAttribute('data-metric');
    const textContainer = document.getElementById('hud-metric-text');
    
    document.querySelectorAll('.data-tag').forEach(tag => tag.classList.remove('tag-active'));
    clickedTag.classList.add('tag-active');
    
    textContainer.style.opacity = '0';
    setTimeout(() => {
        textContainer.innerText = metadata;
        textContainer.style.color = 'var(--primary-color)';
        textContainer.style.opacity = '1';
    }, 150);
}

document.querySelector('.photo-container.smart-portal').addEventListener('mouseleave', () => {
    const textContainer = document.getElementById('hud-metric-text');
    document.querySelectorAll('.data-tag').forEach(tag => tag.classList.remove('tag-active'));
    
    textContainer.style.opacity = '0';
    setTimeout(() => {
        textContainer.innerText = "CLICK ON TAGS TO INSPECT BACKGROUND";
        textContainer.style.color = 'var(--text-light)';
        textContainer.style.opacity = '1';
    }, 150);
});

// --- 6. Page Loading, Nav Active State, & Typing Carousel ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('page-loader');
    if (preloader) {
        setTimeout(() => { preloader.classList.add('fade-out'); }, 300);
    }
});

const pageSections = document.querySelectorAll('section');
const menuNavigationLinks = document.querySelectorAll('.links a');

const scrollSpyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const currentActiveId = entry.target.getAttribute('id');
            menuNavigationLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentActiveId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

pageSections.forEach(section => scrollSpyObserver.observe(section));

const typingPhrases = ["Frontend Developer.", "Data Analytics Enthusiast.", "Problem Solver.", "Quick Learner."];
let currentPhraseIndex = 0; let currentCharIndex = 0; let isErasingPhrase = false;

function runTypingCarouselPipeline() {
    const textContainer = document.getElementById('typing-text');
    if (!textContainer) return;
    
    const targetFullPhrase = typingPhrases[currentPhraseIndex];
    if (!isErasingPhrase) {
        textContainer.textContent = targetFullPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        if (currentCharIndex === targetFullPhrase.length) {
            isErasingPhrase = true;
            setTimeout(runTypingCarouselPipeline, 2000);
            return;
        }
    } else {
        textContainer.textContent = targetFullPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        if (currentCharIndex === 0) {
            isErasingPhrase = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % typingPhrases.length;
        }
    }
    setTimeout(runTypingCarouselPipeline, isErasingPhrase ? 50 : 100);
}
document.addEventListener('DOMContentLoaded', runTypingCarouselPipeline);

// --- 7. Dynamic Light / Dark Variable Theme Controller ---
function toggleTheme() {
    const rootElement = document.documentElement;
    const currentTheme = rootElement.getAttribute('data-theme');
    const themeButtonIcon = document.querySelector('#theme-toggle i');
    
    if (currentTheme === 'light') {
        rootElement.removeAttribute('data-theme');
        if (themeButtonIcon) themeButtonIcon.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'dark');
    } else {
        rootElement.setAttribute('data-theme', 'light');
        if (themeButtonIcon) themeButtonIcon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'light');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        const icon = document.querySelector('#theme-toggle i');
        if (icon) icon.className = 'fa-solid fa-sun';
    }
});