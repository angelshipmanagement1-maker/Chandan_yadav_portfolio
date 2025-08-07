import React, { useState } from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = `Hello ${name}, I found your contact through the employee directory.`;
    const whatsappUrl = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="whatsapp-button-container">
      <button
        className={`whatsapp-button ${isHovered ? 'hovered' : ''}`}
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={`Contact ${name} on WhatsApp`}
      >
        <div className="whatsapp-icon">
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="whatsapp-ripple"></div>
        <div className="whatsapp-glow"></div>
      </button>
      
      <div className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
        <span>Chat with {name}</span>
        <div className="tooltip-arrow"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;