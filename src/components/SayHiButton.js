import React, { useState, useEffect } from "react";
import "../styles/SayHiButton.css";

const SayHiButton = () => {
  const [clickCount, setClickCount] = useState(0);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState(null);

  const messages = [
    "🔔 Hey, I see you! Welcome to my portfolio. Have a great time exploring!",
    "Did you know? The first computer bug was an actual moth stuck in a relay! 🦋",
    "Alright, I get it. You love clicking buttons. Should I add more? 😂",
    "Okay, now you're just here to see what happens next... Should I charge you? 💸",
    "Oops… Bell is gone! 👻 Try refreshing to bring it back!"
  ];

  // ✅ Handle Button Click
  const handleClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    // ✅ Show appropriate message
    setMessage(messages[Math.min(newCount - 1, messages.length - 1)]);

    // ✅ Hide message after 3.5 seconds
    setTimeout(() => setMessage(null), 3500);

    // ✅ Hide button after 5th click (but keep message visible for 3.5s)
    if (newCount === 5) {
      setTimeout(() => setVisible(false), 0);
    }
  };

  // ✅ Reset state on page refresh
  useEffect(() => {
    setClickCount(0);  // Reset click count on refresh
    setVisible(true);   // Ensure button is visible
    setMessage(null);   // Clear any previous messages
  }, []);

  return (
    <div className="hero-say-hi-container">
      {visible && (
        <button className="say-hi-btn" onClick={handleClick}>
          <span className="bell-icon">🔔</span> Ring the Bell
        </button>
      )}
      {message && <div className="toast-message">{message}</div>}
    </div>
  );
};

export default SayHiButton;
