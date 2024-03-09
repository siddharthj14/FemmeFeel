import "./Chat.css";

function Chat() {
  return (
    <div className="chatBot">
      <header>
        <h2>Chatbot</h2>
      </header>
      <ul className="chatbox">
        <li className="chat incoming">
          <span>
             
            <img src="src/assets/logo-chatbot.png" alt="Logo" className="logo" />
          </span>
          <p>
            Hi there <br></br>How can I help you today?
          </p>
        </li>
        <li className="chat outgoing">
          <p>Lorem ipsum dolor sit amet .</p>
        </li>
      </ul>
      <div className="chat-input">
        <textarea placeholder="Enter a message..." required></textarea>
        <span id="send-btn">&#10148;</span>
      </div>
    </div>
  );
}

export default Chat;
