// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Quick exit functionality
document.addEventListener('keyup', function(e) {
    if (e.key === 'Escape') {
        window.location.href = 'https://www.weather.com';
    }
});

// Exit button functionality
document.getElementById('exitButton').addEventListener('click', function(e) {
    e.preventDefault();
    window.location.href = 'https://www.weather.com';
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const nav = document.getElementById('mainNav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Chatbot functionality
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotContainer = document.getElementById('chatbotContainer');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotMessages = document.getElementById('chatbotMessages');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');

chatbotToggle.addEventListener('click', () => {
    chatbotContainer.classList.toggle('hidden');
});

chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.add('hidden');
});

function addMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    messageElement.style.marginBottom = '10px';
    messageElement.style.padding = '10px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.maxWidth = '80%';
    
    if (isUser) {
        messageElement.style.backgroundColor = '#E0AAFF';
        messageElement.style.marginLeft = 'auto';
    } else {
        messageElement.style.backgroundColor = '#F5E6FF';
    }
    
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function botResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! How can I assist you today?";
    } else if (lowerMessage.includes('help')) {
        return "I'm here to help. Would you like information on reporting an incident, finding resources, or speaking with a counselor?";
    } else if (lowerMessage.includes('report')) {
        return "To report an incident, please click the 'Safely Report an Incident' button on our homepage. Remember, all reports are 100% anonymous and secure.";
    } else if (lowerMessage.includes('resource')) {
        return "We offer various resources including legal aid, safe shelters, and counseling services. Would you like more information on any specific resource?";
    } else if (lowerMessage.includes('counselor') || lowerMessage.includes('talk to someone')) {
        return "Our trained counselors are available 24/7. Would you like me to connect you with one now?";
    } else {
        return "I'm sorry, I didn't quite understand that. Could you please rephrase or ask about reporting, resources, or speaking with a counselor?";
    }
}

chatbotSend.addEventListener('click', () => {
    const message = chatbotInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatbotInput.value = '';
        
        setTimeout(() => {
            const response = botResponse(message);
            addMessage(response);
        }, 500);
    }
});

chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        chatbotSend.click();
    }
});

// Initial bot message
addMessage("Hello, I'm here to assist you. How can I help you today?");

// document.getElementById('btn-form').addEventListener('click', (e) => {
//     e.preventDefault();
//     window.location.href = './form.html';
//   });

