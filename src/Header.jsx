import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [text, setText] = useState("");
  const message = "Yoour Emotional Wellness Journey Starts Here!";
  const speed = 50;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < message.length) {
        setText((prevText) => prevText + message.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <img src="src/assets/logo.png" alt="Logo" className="logo" />
      <div className="title skranji-bold">Femme<span className="white">Feel</span></div>
      <div className="banner skranji-regular" id="demo">
        {text}
      </div>
    </div>
  );
}

export default Header;
