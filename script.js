// Tab Switching
function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Switch tab from navigation or programmatically
function switchTabByName(tabName) {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Remove active from all tabs and contents
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Activate the correct tab button if it exists
    tabs.forEach(tab => {
        if (tab.getAttribute('onclick') && tab.getAttribute('onclick').includes(tabName)) {
            tab.classList.add('active');
        }
    });
    
    // Activate the correct content
    const targetContent = document.getElementById(tabName);
    if (targetContent) {
        targetContent.classList.add('active');
    }
    
    // Activate the correct nav link
    navLinks.forEach(link => {
        if (link.getAttribute('onclick') && link.getAttribute('onclick').includes(tabName)) {
            link.classList.add('active');
        }
    });
}

// Profile Update
document.getElementById('profileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMsg = document.getElementById('profileSuccess');
    successMsg.classList.remove('hidden');
    
    setTimeout(() => {
        successMsg.classList.add('hidden');
    }, 3000);
});

// Appointment Booking
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMsg = document.getElementById('appointmentSuccess');
    successMsg.classList.remove('hidden');
    
    setTimeout(() => {
        this.reset();
        successMsg.classList.add('hidden');
    }, 3000);
});

function updateDoctorList() {
    // Simulate doctor list update based on specialty
    alert('Doctor list updated based on specialty selection');
}

// Live Vitals Simulation
let vitalsInterval;
function startVitalsMonitoring() {
    vitalsInterval = setInterval(() => {
        const heartRate = 70 + Math.floor(Math.random() * 10);
        const oxygenSat = 96 + Math.floor(Math.random() * 4);
        
        document.getElementById('heartRate').textContent = heartRate;
        document.getElementById('oxygenSat').textContent = oxygenSat;
        
        // Update heart rate graph
        updateHeartRateGraph();
        
        // Update oxygen saturation circle
        updateOxygenCircle(oxygenSat);
    }, 3000);
    
    // Initialize graphs
    updateHeartRateGraph();
    updateOxygenCircle(98);
}

function updateHeartRateGraph() {
    const path = document.getElementById('heartPath');
    if (!path) return;
    
    const width = path.parentElement.clientWidth || 200;
    const height = 60;
    const points = 20;
    let pathData = `M 0,${height} `;
    
    for (let i = 0; i < points; i++) {
        const x = (width / points) * i;
        const baseY = height / 2;
        const variation = Math.sin(i * 0.5) * 10 + Math.random() * 5;
        const y = baseY + variation;
        pathData += `L ${x},${y} `;
    }
    
    pathData += `L ${width},${height} Z`;
    path.setAttribute('d', pathData);
}

function updateOxygenCircle(percentage) {
    const circle = document.getElementById('o2Circle');
    if (!circle) return;
    
    const circumference = 157; // 2 * PI * 25
    const offset = circumference - (circumference * percentage / 100);
    circle.style.strokeDashoffset = offset;
}

// Vitals Logging
document.getElementById('vitalsForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const successMsg = document.getElementById('vitalsSuccess');
    successMsg.classList.remove('hidden');
    
    setTimeout(() => {
        this.reset();
        successMsg.classList.add('hidden');
    }, 3000);
});

function viewVitalsHistory() {
    alert('Opening your vitals history...');
}

// Start vitals monitoring on page load
startVitalsMonitoring();

// AI Health Assistant
const assistantResponses = [
    "I understand. Can you tell me more about when these symptoms started?",
    "Thank you for sharing that information. On a scale of 1-10, how would you rate the severity?",
    "Based on what you've described, I recommend scheduling an appointment with a general physician. Would you like me to help you book one?",
    "I've noted your symptoms in your health profile. For immediate concerns, you can also reach our 24/7 helpline. Would you like the number?",
    "Is there anything else bothering you that I should know about?"
];
let responseIndex = 0;

function sendTriageMessage() {
    const input = document.getElementById('triageInput');
    const messagesContainer = document.getElementById('chatMessages');
    
    if (input.value.trim() === '') return;
    
    // Add user message
    const userMsg = document.createElement('div');
    userMsg.className = 'message message-user';
    userMsg.textContent = input.value;
    messagesContainer.appendChild(userMsg);
    
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'message message-bot';
        botMsg.textContent = assistantResponses[responseIndex % assistantResponses.length];
        messagesContainer.appendChild(botMsg);
        responseIndex++;
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 1000);
    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

document.getElementById('triageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendTriageMessage();
    }
});

// OCR File Upload
const uploadArea = document.getElementById('uploadArea');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

['dragenter', 'dragover'].forEach(eventName => {
    uploadArea.addEventListener(eventName, () => {
        uploadArea.classList.add('drag-over');
    });
});

['dragleave', 'drop'].forEach(eventName => {
    uploadArea.addEventListener(eventName, () => {
        uploadArea.classList.remove('drag-over');
    });
});

uploadArea.addEventListener('drop', function(e) {
    const files = e.dataTransfer.files;
    handleFiles(files);
});

function handleFileUpload(event) {
    const files = event.target.files;
    handleFiles(files);
}

function handleFiles(files) {
    if (files.length > 0) {
        const file = files[0];
        document.getElementById('fileName').textContent = file.name;
        document.getElementById('fileSize').textContent = (file.size / 1024 / 1024).toFixed(2) + ' MB';
        document.getElementById('filePreviewContainer').classList.remove('hidden');
    }
}

function processOCR() {
    const resultsDiv = document.getElementById('ocrResults');
    resultsDiv.classList.add('hidden');
    
    // Simulate OCR processing
    setTimeout(() => {
        resultsDiv.classList.remove('hidden');
        resultsDiv.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

// Set minimum date for appointment booking (today)
const today = new Date().toISOString().split('T')[0];
document.getElementById('appointmentDate').setAttribute('min', today);

// Set current datetime for vitals logging
const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('vitalDate').value = now.toISOString().slice(0, 16);