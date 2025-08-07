import React from 'react';
import { companyInfo } from '../data/employees';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Information */}
          <div className="footer-section company-section">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <i className="fas fa-anchor"></i>
              </div>
              <div className="footer-brand">
                <h4 className="footer-company-name font-primary">
                  {companyInfo.shortName}
                </h4>
                <p className="footer-tagline">Documentation Pvt. Ltd.</p>
              </div>
            </div>
            <p className="footer-description">
              Professional marine documentation services with cutting-edge digital solutions 
              for seafarers worldwide.
            </p>
            <div className="footer-established">
              <i className="fas fa-calendar-alt"></i>
              <span>Established {companyInfo.established}</span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer-section contact-section">
            <h4 className="footer-section-title">
              <i className="fas fa-address-book"></i>
              Contact Info
            </h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{companyInfo.address}</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-phone"></i>
                <span>{companyInfo.phone}</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-envelope"></i>
                <span>{companyInfo.email}</span>
              </div>
              <div className="footer-contact-item">
                <i className="fas fa-globe"></i>
                <span>{companyInfo.website}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-section services-section">
            <h4 className="footer-section-title">
              <i className="fas fa-cogs"></i>
              Our Services
            </h4>
            <ul className="footer-services-list">
              <li>
                <i className="fas fa-id-card"></i>
                <span>Digital Employee ID Cards</span>
              </li>
              <li>
                <i className="fas fa-certificate"></i>
                <span>Marine Certifications</span>
              </li>
              <li>
                <i className="fas fa-ship"></i>
                <span>Vessel Documentation</span>
              </li>
              <li>
                <i className="fas fa-shield-alt"></i>
                <span>Security Compliance</span>
              </li>
              <li>
                <i className="fas fa-database"></i>
                <span>Document Management</span>
              </li>
            </ul>
          </div>

          {/* System Information */}
          <div className="footer-section system-section">
            <h4 className="footer-section-title">
              <i className="fas fa-info-circle"></i>
              System Info
            </h4>
            <div className="footer-system-info">
              <div className="system-item">
                <span className="system-label">Version</span>
                <span className="system-value font-mono">v2.1.0</span>
              </div>
              <div className="system-item">
                <span className="system-label">License</span>
                <span className="system-value font-mono">{companyInfo.license}</span>
              </div>
              <div className="system-item">
                <span className="system-label">Status</span>
                <span className="system-value font-mono status-online">
                  <i className="fas fa-circle"></i>
                  ONLINE
                </span>
              </div>
              <div className="system-item">
                <span className="system-label">Security</span>
                <span className="system-value font-mono">
                  <i className="fas fa-lock"></i>
                  ENCRYPTED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>
                © {currentYear} {companyInfo.name}. All rights reserved.
              </p>
              <p className="footer-legal">
                This system is protected by advanced encryption and security protocols.
              </p>
            </div>
            
            <div className="footer-tech-info">
              <div className="tech-badges">
                <span className="tech-badge">
                  <i className="fab fa-react"></i>
                  React
                </span>
                <span className="tech-badge">
                  <i className="fas fa-shield-alt"></i>
                  Secure
                </span>
                <span className="tech-badge">
                  <i className="fas fa-mobile-alt"></i>
                  Responsive
                </span>
              </div>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="footer-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-center">
              <i className="fas fa-anchor"></i>
            </div>
            <div className="decoration-line"></div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="footer-effects">
        <div className="footer-grid"></div>
        <div className="footer-glow"></div>
      </div>
    </footer>
  );
};

export default Footer;