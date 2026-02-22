const CocoAI = () => {
    return (
        <div id="assistant" className="tab-content">
            <div className="section">
                <div className="section-header">
                    <h2 className="section-title">Your Personal Health Assistant</h2>
                    <span style="font-size: 0.9rem; color: var(--text-secondary);">24/7 Support</span>
                </div>
                
                <p style="background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%); padding: 1.25rem; border-radius: 10px; margin-bottom: 2rem; border-left: 4px solid #6366F1;">
                    💬 <strong>Coco : Your friendly health companion</strong> - Ask me about symptoms, medications, health tips, or book appointments. I'm here to help guide you to the right care!
                </p>

                <div className="chat-container">
                    <div className="chat-messages" id="chatMessages">
                        <div className="message message-bot">
                            Hello Rahul! 👋 I'm Coco your Personal Health Assistant. I'm here to help you with:
                            <ul style="margin: 0.75rem 0 0 1.25rem; line-height: 1.8;">
                                <li>Understanding your symptoms</li>
                                <li>Medication information and reminders</li>
                                <li>Booking appointments</li>
                                <li>General health guidance</li>
                            </ul>
                            How can I assist you today?
                        </div>
                    </div>
                    <div className="chat-input-container">
                        <input type="text" className="chat-input" id="triageInput" placeholder="Type your question here..."></input>
                        <button className="btn btn-primary" onclick="sendTriageMessage()">Send</button>
                    </div>
                </div>

                <div style="margin-top: 1.5rem; padding: 1rem; background: #FFF7ED; border-left: 4px solid var(--warning); border-radius: 8px;">
                    <strong>Important:</strong> This AI assistant provides general health information and guidance only. For medical emergencies, call emergency services immediately. Always consult with your healthcare provider for diagnosis and treatment.
                </div>
            </div>
        </div>
    );
}

export default CocoAI;