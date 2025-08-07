import React, { useState, useEffect } from 'react';
import { companyInfo } from '../data/employees';
import './EmployeeCard.css';

const EmployeeCard = ({ employee }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    });
  };

  const calculateExperience = (joiningDate) => {
    const joining = new Date(joiningDate);
    const now = new Date();
    const years = now.getFullYear() - joining.getFullYear();
    const months = now.getMonth() - joining.getMonth();
    
    if (months < 0) {
      return `${years - 1} years, ${12 + months} months`;
    }
    return `${years} years, ${months} months`;
  };

  return (
    <div className="employee-card-container">
      <div className={`employee-card ${isFlipped ? 'flipped' : ''}`}>
        {/* Front Side */}
        <div className="card-side card-front">
          {/* Card Header */}
          <div className="card-header">
            <div className="company-logo">
              <div className="logo-icon">
                <i className="fas fa-anchor"></i>
              </div>
              <div className="company-info">
                <h3 className="company-name font-primary">
                  {companyInfo.shortName}
                </h3>
                <p className="company-tagline">Documentation Pvt. Ltd.</p>
              </div>
            </div>
            <div className="card-type">
              <span className="type-badge font-mono">EMPLOYEE ID</span>
            </div>
          </div>

          {/* Employee Photo Section */}
          <div className="photo-section">
            <div className="photo-container">
              <div className="photo-frame">
                <img 
                  src={employee.photo} 
                  alt={employee.name}
                  className="employee-photo"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMWEyMzMyIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzAwZmZmZiIvPgo8cGF0aCBkPSJNNjAgMTYwQzYwIDEzNS44IDc1LjggMTIwIDEwMCAxMjBTMTQwIDEzNS44IDE0MCAxNjBINjBaIiBmaWxsPSIjMDBmZmZmIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDBmZmZmIiBmb250LXNpemU9IjEyIj5ObyBQaG90bzwvdGV4dD4KPC9zdmc+';
                  }}
                />
                <div className="photo-overlay">
                  <div className="scan-line"></div>
                </div>
              </div>
              <div className="status-indicator">
                <div className="status-dot animate-pulse"></div>
                <span className="status-text font-mono">ACTIVE</span>
              </div>
            </div>
          </div>

          {/* Employee Information */}
          <div className="info-section">
            <div className="primary-info">
              <h2 className="employee-name font-primary glow-text">
                {employee.name}
              </h2>
              <p className="employee-designation">
                {employee.designation}
              </p>
              <div className="employee-id">
                <span className="id-label font-mono">ID:</span>
                <span className="id-value font-mono">{employee.id}</span>
              </div>
            </div>

            <div className="details-grid">
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Code Name</span>
                  <span className="detail-value font-mono">{employee.codeName}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-tint"></i>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Blood Group</span>
                  <span className="detail-value font-mono">{employee.bloodGroup}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Joined</span>
                  <span className="detail-value">{formatDate(employee.dateOfJoining)}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Department</span>
                  <span className="detail-value">{employee.department}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="card-footer">
            <div className="footer-info">
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
              <div className="security-code font-mono">
                SEC: {employee.id}-{new Date().getFullYear()}
              </div>
            </div>
            <button 
              className="flip-button cyber-button"
              onClick={() => setIsFlipped(true)}
            >
              <i className="fas fa-sync-alt"></i>
              More Info
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="card-decorations">
            <div className="corner-decoration top-left"></div>
            <div className="corner-decoration top-right"></div>
            <div className="corner-decoration bottom-left"></div>
            <div className="corner-decoration bottom-right"></div>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-side card-back">
          {/* Back Header */}
          <div className="back-header">
            <h3 className="back-title font-primary glow-text">
              <i className="fas fa-info-circle"></i>
              Detailed Information
            </h3>
            <button 
              className="flip-back-button"
              onClick={() => setIsFlipped(false)}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          {/* Contact Information */}
          <div className="contact-section">
            <h4 className="section-title">
              <i className="fas fa-address-book"></i>
              Contact Details
            </h4>
            <div className="contact-grid">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <span className="contact-label">Phone</span>
                  <span className="contact-value font-mono">{employee.phone}</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone-alt"></i>
                <div>
                  <span className="contact-label">Emergency</span>
                  <span className="contact-value font-mono">{employee.emergencyContact}</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className="contact-label">Address</span>
                  <span className="contact-value">{employee.address}</span>
                </div>
              </div>
              <div className="contact-item">
                <i className="fas fa-user-friends"></i>
                <div>
                  <span className="contact-label">Guardian</span>
                  <span className="contact-value">{employee.guardian}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Information */}
          <div className="professional-section">
            <h4 className="section-title">
              <i className="fas fa-briefcase"></i>
              Professional Details
            </h4>
            <div className="professional-grid">
              <div className="professional-item">
                <span className="professional-label">Qualification</span>
                <span className="professional-value">{employee.qualification}</span>
              </div>
              <div className="professional-item">
                <span className="professional-label">Experience</span>
                <span className="professional-value">{calculateExperience(employee.dateOfJoining)}</span>
              </div>
              <div className="professional-item">
                <span className="professional-label">Certifications</span>
                <div className="certifications">
                  {employee.certifications.map((cert, index) => (
                    <span key={index} className="certification-badge">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security Features */}
          <div className="security-section">
            <div className="security-grid">
              <div className="security-item">
                <i className="fas fa-shield-alt"></i>
                <span>Verified Employee</span>
              </div>
              <div className="security-item">
                <i className="fas fa-fingerprint"></i>
                <span>Biometric Enabled</span>
              </div>
              <div className="security-item">
                <i className="fas fa-qrcode"></i>
                <span>QR Authenticated</span>
              </div>
            </div>
          </div>

          {/* Back Decorations */}
          <div className="back-decorations">
            <div className="watermark font-primary">
              {companyInfo.shortName}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;