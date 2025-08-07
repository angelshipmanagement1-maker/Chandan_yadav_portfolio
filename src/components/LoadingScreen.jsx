import React from 'react';
import { companyInfo } from '../data/employees';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-container">
        {/* Company Logo */}
        <div className="loading-logo">
          <div className="logo-icon animate-glow">
            <i className="fas fa-anchor"></i>
          </div>
          <h1 className="loading-title font-primary glow-text">
            {companyInfo.shortName}
          </h1>
          <p className="loading-subtitle font-secondary">
            Documentation Pvt. Ltd.
          </p>
        </div>

        {/* Loading Animation */}
        <div className="loading-animation">
          <div className="loading-spinner">
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
            <div className="spinner-ring"></div>
          </div>
          <p className="loading-text font-mono">
            Initializing Employee Database...
          </p>
        </div>

        {/* Loading Progress */}
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <div className="progress-steps">
            <div className="step active">
              <i className="fas fa-database"></i>
              <span>Loading Data</span>
            </div>
            <div className="step active">
              <i className="fas fa-shield-alt"></i>
              <span>Security Check</span>
            </div>
            <div className="step active">
              <i className="fas fa-check-circle"></i>
              <span>Ready</span>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="system-info">
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">System</span>
              <span className="info-value font-mono">EMP-ID-SYS v2.1</span>
            </div>
            <div className="info-item">
              <span className="info-label">Status</span>
              <span className="info-value font-mono">ONLINE</span>
            </div>
            <div className="info-item">
              <span className="info-label">Security</span>
              <span className="info-value font-mono">ENCRYPTED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="loading-effects">
        <div className="grid-overlay"></div>
        <div className="scan-lines"></div>
        <div className="floating-particles">
          {[...Array(15)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;