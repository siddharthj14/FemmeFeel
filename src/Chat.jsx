import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [userMessage, setUserMessage] = useState("");
  const [inputHeight, setInputHeight] = useState("auto");
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (e) => {
    setUserMessage(e.target.value.trim());
    setInputHeight(`${e.target.scrollHeight}px`);
  };

  const handleSendChat = () => {
    const message = userMessage.trim();
    if (!message) return;
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { content: message, type: "outgoing" },
    ]);
    setUserMessage(""); // Clear the input textarea
    setInputHeight("auto"); // Reset input textarea height
    generateResponse(message);
  };

  const generateResponse = (userMessage) => {
    return "userMessage !!";
  };

  return (
    <div className="chatBot">
      <header>
        <h2>Chatbot</h2>
      </header>
      <ul className="chatbox">
        {chatMessages.map((message, index) => (
          <li key={index} className={`chat ${message.type}`}>
            {message.type === "incoming" && (
              <span>
                <img
                  src="src/assets/logo-chatbot.png"
                  alt="Logo"
                  className="logo"
                />
              </span>
            )}
            <p>{message.content}</p>
          </li>
        ))}
      </ul>
      <div className="chat-input">
        <textarea
          placeholder="Enter a message..."
          value={userMessage}
          onChange={handleInputChange}
          style={{ height: inputHeight }}
          required
        ></textarea>
        <span id="send-btn" onClick={handleSendChat}>
          &#10148;
        </span>
      </div>
    </div>
  );
}

export default Chat;
