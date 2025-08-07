import React, { useState } from 'react';
import { employee } from '../data/employees';
import './ContactSection.css';

const ContactSection = () => {
  const [copiedField, setCopiedField] = useState('');

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(''), 2000);
    });
  };

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="header-icon">
            <i className="fas fa-address-book"></i>
          </div>
          <div className="header-content">
            <h1 className="contact-title font-primary glow-text">
              Contact Information
            </h1>
            <p className="contact-subtitle">
              Get in touch with {employee.name.split(' ')[0]}
            </p>
          </div>
          <div className="header-decoration">
            <div className="signal-bars">
              <div className="bar bar-1"></div>
              <div className="bar bar-2"></div>
              <div className="bar bar-3"></div>
              <div className="bar bar-4"></div>
            </div>
          </div>
        </div>

        {/* Main Contact Info */}
        <div className="contact-content">
          {/* Primary Contact */}
          <div className="primary-contact">
            <div className="contact-card main-card">
              <div className="card-header">
                <div className="contact-avatar">
                  <img
                    src={employee.photo}
                    alt={employee.name}
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMWEyMzMyIi8+CjxjaXJjbGUgY3g9IjQwIiBjeT0iMzAiIHI9IjEyIiBmaWxsPSIjMDBmZmZmIi8+CjxwYXRoIGQ9Ik0yMCA2NUMyMCA1NC41IDI5LjUgNDUgNDAgNDVTNjAgNTQuNSA2MCA2NUgyMFoiIGZpbGw9IiMwMGZmZmYiLz4KPHR4dCB4PSI0MCIgeT0iNzUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMGZmZmYiIGZvbnQtc2l6ZT0iOCI+U1A8L3R4dD4KPC9zdmc+';
                    }}
                  />
                  <div className="avatar-status">
                    <i className="fas fa-circle"></i>
                  </div>
                </div>
                <div className="contact-info">
                  <h2 className="contact-name">{employee.name}</h2>
                  <p className="contact-role">{employee.designation}</p>
                  <p className="contact-dept">{employee.department}</p>
                </div>
              </div>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="method-content">
                    <span className="method-label">Mobile</span>
                    <span className="method-value font-mono">{employee.phone}</span>
                  </div>
                  <button 
                    className="copy-button"
                    onClick={() => copyToClipboard(employee.phone, 'phone')}
                  >
                    <i className={`fas ${copiedField === 'phone' ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-id-card"></i>
                  </div>
                  <div className="method-content">
                    <span className="method-label">Employee ID</span>
                    <span className="method-value font-mono">{employee.id}</span>
                  </div>
                  <button 
                    className="copy-button"
                    onClick={() => copyToClipboard(employee.id, 'id')}
                  >
                    <i className={`fas ${copiedField === 'id' ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <i className="fas fa-code"></i>
                  </div>
                  <div className="method-content">
                    <span className="method-label">Code Name</span>
                    <span className="method-value font-mono">{employee.codeName}</span>
                  </div>
                  <button 
                    className="copy-button"
                    onClick={() => copyToClipboard(employee.codeName, 'code')}
                  >
                    <i className={`fas ${copiedField === 'code' ? 'fa-check' : 'fa-copy'}`}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="address-section">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-map-marker-alt"></i>
                Address Information
              </h2>
            </div>
            <div className="address-card">
              <div className="address-content">
                <div className="address-icon">
                  <i className="fas fa-home"></i>
                </div>
                <div className="address-details">
                  <h3>Residential Address</h3>
                  <p className="address-text">{employee.address}</p>
                  <button 
                    className="address-action"
                    onClick={() => copyToClipboard(employee.address, 'address')}
                  >
                    <i className={`fas ${copiedField === 'address' ? 'fa-check' : 'fa-copy'}`}></i>
                    {copiedField === 'address' ? 'Copied!' : 'Copy Address'}
                  </button>
                </div>
              </div>
              <div className="address-map">
                <div className="map-placeholder">
                  <i className="fas fa-map"></i>
                  <span>Navi Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="emergency-section">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-exclamation-triangle"></i>
                Emergency Contact
              </h2>
            </div>
            <div className="emergency-card">
              <div className="emergency-header">
                <div className="emergency-icon">
                  <i className="fas fa-user-friends"></i>
                </div>
                <div className="emergency-info">
                  <h3>{employee.emergencyContact.name}</h3>
                  <p className="emergency-relation">{employee.emergencyContact.relation}</p>
                </div>
                <div className="emergency-status">
                  <span className="status-badge">PRIMARY</span>
                </div>
              </div>
              <div className="emergency-contact-method">
                <div className="method-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="method-content">
                  <span className="method-label">Emergency Phone</span>
                  <span className="method-value font-mono">{employee.emergencyContact.phone}</span>
                </div>
                <button 
                  className="copy-button emergency-copy"
                  onClick={() => copyToClipboard(employee.emergencyContact.phone, 'emergency')}
                >
                  <i className={`fas ${copiedField === 'emergency' ? 'fa-check' : 'fa-copy'}`}></i>
                </button>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="additional-info">
            <div className="info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-calendar-check"></i>
                </div>
                <div className="info-content">
                  <h4>Availability</h4>
                  <p>Monday - Friday</p>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-content">
                  <h4>Time Zone</h4>
                  <p>IST (UTC +5:30)</p>
                  <span>Mumbai, India</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-language"></i>
                </div>
                <div className="info-content">
                  <h4>Languages</h4>
                  <p>English, Hindi</p>
                  <span>Marathi (Native)</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="info-content">
                  <h4>Security Level</h4>
                  <p>Level 3 Clearance</p>
                  <span>IT Department</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-bolt"></i>
                Quick Actions
              </h2>
            </div>
            <div className="actions-grid">
              <button className="action-button">
                <i className="fas fa-phone"></i>
                <span>Call Now</span>
              </button>
              <button className="action-button">
                <i className="fas fa-sms"></i>
                <span>Send SMS</span>
              </button>
              <button className="action-button">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </button>
              <button className="action-button">
                <i className="fas fa-calendar-plus"></i>
                <span>Schedule Meeting</span>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="contact-decorations">
          <div className="signal-waves">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;