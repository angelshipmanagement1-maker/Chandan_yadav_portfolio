import React, { useState, useEffect } from 'react';
import { companyInfo } from '../data/employees';
import './Header.css';

const Header = ({ navigationItems, activeSection, onNavigate }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Company Logo and Brand */}
          <div className="brand-section">
            <div className="logo-container">
              <div className="logo-icon">
                <i className="fas fa-anchor"></i>
              </div>
              <div className="brand-text">
                <h1 className="company-name font-primary glow-text">
                  {companyInfo.shortName}
                </h1>
                <p className="company-tagline font-secondary">
                  {companyInfo.industry}
                </p>
              </div>
            </div>
            
            {/* System Info */}
            <div className="system-info">
              <div className="system-badge">
                <i className="fas fa-shield-alt"></i>
                <span className="font-mono">SECURE</span>
              </div>
              <div className="license-info">
                <span className="watermark-text font-mono">
                  {companyInfo.license}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="nav-section">
            <div className="nav-links">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                  disabled={!item.active}
                >
                  <i className={item.icon}></i>
                  <span>{item.name}</span>
                  <div className="nav-glow"></div>
                </button>
              ))}
            </div>
          </nav>

          {/* Status Indicator */}
          <div className="status-section">
            <div className="status-indicator">
              <div className="status-dot animate-pulse"></div>
              <span className="status-text font-mono">ONLINE</span>
            </div>
            <div className="timestamp font-mono">
              {currentTime.toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
              })}
            </div>
            <div className="system-version font-mono">
              v2.1.0
            </div>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="header-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-center">
            <div className="center-icon">
              <i className="fas fa-microchip"></i>
            </div>
            <div className="data-flow">
              <span className="data-bit">01</span>
              <span className="data-bit">10</span>
              <span className="data-bit">11</span>
            </div>
          </div>
          <div className="decoration-line"></div>
        </div>

        {/* Holographic Border */}
        <div className="holographic-border"></div>
      </div>
    </header>
  );
};

export default Header;