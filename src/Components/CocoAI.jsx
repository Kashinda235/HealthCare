const CocoAI = () => {

  const sendTriageMessage = () => {
    console.log("Send clicked");
  };

  return (
    <div id="assistant" className="tab-content">
      <div className="section">
        <div className="section-header">
          <h2 className="section-title">Your Personal Health Assistant</h2>
          <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
            24/7 Support
          </span>
        </div>

        <p
          style={{
            background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
            padding: "1.25rem",
            borderRadius: "10px",
            marginBottom: "2rem",
            borderLeft: "4px solid #6366F1"
          }}
        >
          💬 <strong>Coco : Your friendly health companion</strong> - Ask me about symptoms,
          medications, health tips, or book appointments. I'm here to help guide you to the right care!
        </p>

        <div className="chat-container">
          <div className="chat-messages">
            <div className="message message-bot">
              Hello Rahul! 👋 I'm Coco your Personal Health Assistant.
              <ul style={{ margin: "0.75rem 0 0 1.25rem", lineHeight: "1.8" }}>
                <li>Understanding your symptoms</li>
                <li>Medication information and reminders</li>
                <li>Booking appointments</li>
                <li>General health guidance</li>
              </ul>
              How can I assist you today?
            </div>
          </div>

          <div className="chat-input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Type your question here..."
            />
            <button className="btn btn-primary" onClick={sendTriageMessage}>
              Send
            </button>
          </div>
        </div>

        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            background: "#FFF7ED",
            borderLeft: "4px solid var(--warning)",
            borderRadius: "8px"
          }}
        >
          <strong>Important:</strong> This AI assistant provides general health information only.
        </div>
      </div>
    </div>
  );
};

export default CocoAI;