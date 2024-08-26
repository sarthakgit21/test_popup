// src/Popup.js
import React from 'react';
import './Popup.css'; // Optional: Add some styles

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>This is a pop-up!</h2>
        <p>Content goes here...</p>
      </div>
    </div>
  );
};

export default Popup;
