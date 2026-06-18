// ==========================================================================
// CORE LAYOUT MATRIX RUNTIME PIPELINES
// ==========================================================================

// --- 1. Mobile Menu Engine ---
function toggleMenu() {
    const navLinks = document.getElementById('links');
    navLinks.classList.toggle('show');
}

document.querySelectorAll('.links a').forEach(anchor => {
    anchor.addEventListener('click', () => {
        document.getElementById('links').classList.remove('show');
    });
});

// --- 2. Advanced 3D Interactive Mouse-Tilt Mechanism ---
const interactiveCards = document.querySelectorAll('.tilt-card');

interactiveCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const boundingBox = card.getBoundingClientRect();
        const axisX = e.clientX - boundingBox.left;
        const axisY = e.clientY - boundingBox.top;
        
        // Calculate coordinate offsets mapped normalized between -10 to 10 degrees
        const tiltX = (boundingBox.height / 2 - axisY) / (boundingBox.height / 2) * 10;
        const tiltY = (axisX - boundingBox.width / 2) / (boundingBox.width / 2) * 10;
        
        card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px)`;
    });
});

// --- 3. Dynamic 3D Floating Particle Background Matrix ---
const matrixCanvas = document.getElementById('bg-matrix');
const ctx = matrixCanvas.getContext('2d');

let canvasWidth = matrixCanvas.width = window.innerWidth;
let canvasHeight = matrixCanvas.height = window.innerHeight;

const pointCluster = [];
const clusterCap = 65;

class KineticNode {
    constructor() {
        this.coordX = Math.random() * canvasWidth;
        this.coordY = Math.random() * canvasHeight;
        this.radius = Math.random() * 2 + 0.5;
        this.vectorX = Math.random() * 0.4 - 0.2;
        this.vectorY = Math.random() * 0.4 - 0.2;
    }
    
    cycle() {
        this.coordX += this.vectorX;
        this.coordY += this.vectorY;
        
        if (this.coordX < 0 || this.coordX > canvasWidth) this.vectorX *= -1;
        if (this.coordY < 0 || this.coordY > canvasHeight) this.vectorY *= -1;
    }
    
    render() {
        ctx.beginPath();
        ctx.arc(this.coordX, this.coordY, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(252, 166, 31, 0.25)';
        ctx.fill();
    }
}

for (let i = 0; i < clusterCap; i++) {
    pointCluster.push(new KineticNode());
}

function backgroundRuntimePipeline() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    pointCluster.forEach(node => {
        node.cycle();
        node.render();
    });
    
    for (let current = 0; current < pointCluster.length; current++) {
        for (let comparison = current + 1; comparison < pointCluster.length; comparison++) {
            const distanceX = pointCluster[current].coordX - pointCluster[comparison].coordX;
            const distanceY = pointCluster[current].coordY - pointCluster[comparison].coordY;
            const separationScalar = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
            
            if (separationScalar < 120) {
                ctx.beginPath();
                ctx.moveTo(pointCluster[current].coordX, pointCluster[current].coordY);
                ctx.lineTo(pointCluster[comparison].coordX, pointCluster[comparison].coordY);
                ctx.strokeStyle = `rgba(252, 166, 31, ${0.15 * (1 - separationScalar / 120)})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(backgroundRuntimePipeline);
}
backgroundRuntimePipeline();

window.addEventListener('resize', () => {
    canvasWidth = matrixCanvas.width = window.innerWidth;
    canvasHeight = matrixCanvas.height = window.innerHeight;
});

// --- 4. Relational Database Content Engine for Projects ---
const localProjectRecords = {
    'portfolio': {
        title: "Personal Portfolio Workspace",
        image: "satya21.jpg",
        desc: "An ultra-modern developer deployment featuring native JavaScript 3D perspective manipulation, modular glass layout matrices, and optimized runtime tracking engines to yield high visual performance.",
        badges: ["HTML5", "CSS3 Grid System", "Vanilla JavaScript", "3D Kinetic Engine"],
        live: "https://satyaganesh21.github.io/satyaganesh21/",
        repo: "https://github.com/satyaganesh21/satyaganesh21"
    },
    'data-analytics': {
        title: "Data Analytics & Tableau Ecosystem",
        image: "satya212.png",
        desc: "Advanced data parsing architectures built to filter complicated data flows, clean database profiles, and present beautiful predictive analytical graphs via software platform connections. Inspired by enterprise analytics frameworks.",
        badges: ["Tableau Desktop", "Data Analysis", "Python Scripting", "Process Management"],
        live: "https://github.com/satyaganesh21/satyaganesh2121",
        repo: "https://github.com/satyaganesh21/satyaganesh2121"
    },
    'ecommerce': {
        title: "Sweetshop & E-Commerce Web Page",
        image: "satya213.jpg",
        desc: "A beautiful, responsive local sweetshop and confectionery web application built with clean semantic structures, designed specifically to showcase item catalogs with smooth interactive menus.",
        badges: ["HTML5", "CSS3 Layouts", "JavaScript Core ES6", "Responsive Design"],
        live: "https://satyaganesh21.github.io/sweetshop/",
        repo: "https://github.com/satyaganesh21/sweetshop"
    }
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


// ==========================================================================
// INTEGRATED AI SUITE CONFIGURATIONS
// ==========================================================================

// --- FEATURE 4: AI Executive Summary Toggle Logic ---
const structuralBiographies = {
    human: `<p class="self-desc dynamic-fade">
               I'm a highly motivated and detail-oriented computer science student with a deep passion for modern frontend engineering and data insights. As a quick learner, I enjoy tackling architectural challenges, designing intuitive interfaces, and breaking down complex problems. Outside of writing code, I love listening to music, watching movies, and traveling to explore new environments.
            </p>`,
    ai: `<ul class="ai-bullet-list dynamic-fade">
            <li><strong>Technical Track:</strong> Specializing in computer science engineering with deep competencies in frontend architectures and relational data visualization frameworks.</li>
            <li><strong>Core Competency:</strong> Proficient in designing scalable user interfaces with native JavaScript optimization and multi-tiered responsive styling layout structures.</li>
            <li><strong>Operational Strategy:</strong> Strong team collaborator with proven analytical capability, focused on accelerating software performance parameters.</li>
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

// --- FEATURE 3: Real-Time Form Sentiment Engine ---
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

    const optimisticTokens = ['hire', 'interview', 'love', 'great', 'awesome', 'good', 'project', 'work', 'opportunity', 'impressed'];
    const lowerText = currentText.toLowerCase();
    
    let matchCounter = 0;
    optimisticTokens.forEach(token => {
        if (lowerText.includes(token)) matchCounter++;
    });

    if (matchCounter > 0) {
        meterBox.style.borderColor = "#00e5ff";
        meterBox.style.boxShadow = "0 0 10px rgba(0, 229, 255, 0.2)";
        meterText.innerText = "🌟 Highly Positive Intent";
        meterText.style.color = "#00e5ff";
    } else {
        meterBox.style.borderColor = "var(--primary-color)";
        meterBox.style.boxShadow = "0 0 10px rgba(252, 166, 31, 0.2)";
        meterText.innerText = "💼 Professional / Neutral";
        meterText.style.color = "var(--primary-color)";
    }
}

// --- FEATURE 2: AI Intent Semantic Search Engine ---
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
        portfolio: ['portfolio', 'workspace', 'site', 'cv', 'profile', '3d', 'myself', 'resume', 'vanilla'],
        dataAnalytics: ['data', 'analytics', 'tableau', 'python', 'dashboard', 'charts', 'graphs', 'intern', 'predictive', 'process'],
        ecommerce: ['sweetshop', 'shop', 'ecommerce', 'store', 'business', 'local', 'confectionery', 'items', 'menu', 'react']
    };

    let matchedKey = null;
    if (intentWeights.portfolio.some(token => searchVal.includes(token))) matchedKey = 'portfolio';
    else if (intentWeights.dataAnalytics.some(token => searchVal.includes(token))) matchedKey = 'dataAnalytics';
    else if (intentWeights.ecommerce.some(token => searchVal.includes(token))) matchedKey = 'ecommerce';

    if (matchedKey) {
        allCards.forEach(card => card.classList.add('ai-dimmed'));
        if (matchedKey === 'portfolio') {
            cardPortfolio.classList.remove('ai-dimmed'); cardPortfolio.classList.add('ai-matched');
            feedbackTag.innerText = "✨ Matched Developer Profile"; feedbackTag.style.color = "#00e5ff";
        } else if (matchedKey === 'dataAnalytics') {
            cardData.classList.remove('ai-dimmed'); cardData.classList.add('ai-matched');
            feedbackTag.innerText = "📊 Matched Analytics Platform"; feedbackTag.style.color = "#00e5ff";
        } else if (matchedKey === 'ecommerce') {
            cardEcommerce.classList.remove('ai-dimmed'); cardEcommerce.classList.add('ai-matched');
            feedbackTag.innerText = "🛍️ Matched E-Commerce System"; feedbackTag.style.color = "#00e5ff";
        }
    } else {
        allCards.forEach(card => { card.classList.add('ai-dimmed'); card.classList.remove('ai-matched'); });
        feedbackTag.innerText = "🤖 Processing Intent..."; feedbackTag.style.color = "var(--primary-color)";
    }
}

// --- FEATURE 1: AI Twin Chatbot Conversational Knowledge Base ---
const aiKnowledgeBase = {
    skills: "Here is a quick look at my tech stack! 💪\n\n• Frontend: HTML5, CSS3, JavaScript (ES6+), and React.js\n• Data Core: Python scripting & Data Structures (DSA)\n• Analytics: Tableau Desktop for building dynamic dashboards\n\nI love building clean interfaces that connect smoothly with data insights!",
    projects: "I've built a few cool things you can check out right here on my profile! 🚀\n\n1. This Portfolio Workspace: Built with premium 3D mouse-tilt & glassmorphism layout engines.\n2. Tableau Analytics Framework: Custom pipelines built to handle, clean, and visualize complex data trends.\n3. Sweetshop E-Commerce: A fully responsive digital shop catalog featuring interactive menus for a local confectionery.\n\nWhich one would you like to know more about?",
    availability: "I'm actively looking for fresh engineering roles, internship paths, and data analytics collaborations! 💼\n\nI am ready to join a team and make an impact. We can connect instantly:\n• 📱 Call/WhatsApp: +91 7396737874\n• 📧 Drop a message in the contact form right below!\n\nLet's build something great together!",
    default: "Got it! 👍 I'm Satya's AI Twin, built to give you a quick summary of his background.\n\nCould you clarify what you're looking for? Try asking me about:\n• His technical skills stack 🛠️\n• His recent projects 💻\n• His job availability & contact info 📞"
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
        
        if (normalizedInput.includes('skill') || normalizedInput.includes('code') || normalizedInput.includes('language')) finalResponse = aiKnowledgeBase.skills;
        else if (normalizedInput.includes('project') || normalizedInput.includes('work') || normalizedInput.includes('build')) finalResponse = aiKnowledgeBase.projects;
        else if (normalizedInput.includes('job') || normalizedInput.includes('hire') || normalizedInput.includes('contact') || normalizedInput.includes('intern')) finalResponse = aiKnowledgeBase.availability;
        
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

// --- FEATURE: CLICKABLE SMART PORTRAIT HUD DATA TAG CONTROLLER ---
function showTagMetric(clickedTag) {
    const metadata = clickedTag.getAttribute('data-metric');
    const textContainer = document.getElementById('hud-metric-text');
    
    document.querySelectorAll('.data-tag').forEach(tag => tag.classList.remove('tag-active'));
    clickedTag.classList.add('tag-active');
    
    textContainer.style.opacity = '0';
    setTimeout(() => {
        textContainer.innerText = metadata;
        textContainer.style.color = '#fca61f';
        textContainer.style.opacity = '1';
    }, 150);
}

document.querySelector('.photo-container.smart-portal').addEventListener('mouseleave', () => {
    const textContainer = document.getElementById('hud-metric-text');
    document.querySelectorAll('.data-tag').forEach(tag => tag.classList.remove('tag-active'));
    
    textContainer.style.opacity = '0';
    setTimeout(() => {
        textContainer.innerText = "CLICK ON TAGS TO INSPECT BACKGROUND";
        textContainer.style.color = '#fff';
        textContainer.style.opacity = '1';
    }, 150);
});

// --- INTERACTIVE 3D NAVIGATION HEADER TEXT TILT LOGIC ---
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
}// ==========================================================================
// NEW FEATURE ENHANCEMENTS: PAGE LOADER & NAV SCROLL SPY
// ==========================================================================

// --- Loader System Run Logic ---
window.addEventListener('load', () => {
    const preloader = document.getElementById('page-loader');
    if (preloader) {
        // Subtle extra 300ms delay for visual satisfaction, then fades out smoothly
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 300);
    }
});

// --- Active Link Scroll Spy Loop Logic ---
const pageSections = document.querySelectorAll('section');
const menuNavigationLinks = document.querySelectorAll('.links a');

const scrollSpyObserverOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Triggers focus based on viewport coverage area
    threshold: 0
};

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
}, scrollSpyObserverOptions);

// Attach observer track parameters to all active page sections
pageSections.forEach(section => scrollSpyObserver.observe(section));