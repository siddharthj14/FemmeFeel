import React, { useState } from "react";
import "./Chat.css";

function Chat() {
  const [userMessage, setUserMessage] = useState("");
  const [inputHeight, setInputHeight] = useState("auto");
  const [chatMessages, setChatMessages] = useState([]);

  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
    setInputHeight(`${e.target.scrollHeight}px`);
  };

  const handleSendChat = () => {
    const message = userMessage.trim();
    if (!message) return;
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { content: message, type: "outgoing" },
    ]);
    const response = generateResponse(message);
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { content: response, type: "incoming" },
    ]);
    setUserMessage("");
    setInputHeight("auto");
  };

  const generateResponse = (userMessage) => {
    switch (userMessage.toLowerCase()) {
      case "hello":
        return "Hi there! How can I assist you today?";
      case "how are you?":
        return "I'm just a bot, but thanks for asking!";
      case "goodbye":
        return "Goodbye! Have a great day!";
      default:
        return "I'm sorry, I didn't understand that. Can you please rephrase?";
    }
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
