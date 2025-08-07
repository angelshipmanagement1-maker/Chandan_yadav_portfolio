import React, { useState, useEffect } from 'react';
import { companyInfo } from '../data/employees';
import { useAutoProfileAdjustment } from '../hooks/useResponsive';
import './ProfileCard.css';

const ProfileCard = ({ employee }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isFlipped, setIsFlipped] = useState(false);
  const { screenSize, profileConfig } = useAutoProfileAdjustment();

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

  const calculateAge = (birthDate) => {
    const birth = new Date(birthDate.split('/').reverse().join('-'));
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="profile-card-container">
      <div className={`profile-card ${isFlipped ? 'flipped' : ''}`}>
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
                <p className="company-tagline">Employee ID Card</p>
              </div>
            </div>
            <div className="card-type">
              <span className="type-badge font-mono">DIGITAL ID</span>
              <div className="security-chip">
                <i className="fas fa-microchip"></i>
              </div>
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
                  <div className="corner-markers">
                    <div className="marker top-left"></div>
                    <div className="marker top-right"></div>
                    <div className="marker bottom-left"></div>
                    <div className="marker bottom-right"></div>
                  </div>
                </div>
              </div>
              <div className="status-indicator">
                <div className="status-dot animate-pulse"></div>
                <span className="status-text font-mono">VERIFIED</span>
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
              <div className="employee-code-section">
                <div className="employee-code">
                  <span className="code-label font-mono">CODE:</span>
                  <span className="code-value font-mono">{employee.codeName}</span>
                </div>
              </div>
            </div>

            <div className="details-grid">
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Contact</span>
                  <span className="detail-value font-mono">{employee.phone}</span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="detail-content">
                  <span className="detail-label">WhatsApp</span>
                  <a 
                    href={`https://wa.me/91${employee.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    <span className="detail-value font-mono">Chat Now</span>
                  </a>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Joining Date</span>
                  <span className="detail-value">{employee.dateOfJoining}</span>
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
                  <i className="fas fa-birthday-cake"></i>
                </div>
                <div className="detail-content">
                  <span className="detail-label">Age</span>
                  <span className="detail-value">{employee.age} years</span>
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
            <div className="hologram-effect"></div>
          </div>
        </div>

        {/* Back Side */}
        <div className="card-side card-back">
          {/* Back Header */}
          <div className="back-header">
            <h3 className="back-title font-primary glow-text">
              <i className="fas fa-info-circle"></i>
              Personal Profile
            </h3>
            <button 
              className="flip-back-button"
              onClick={() => setIsFlipped(false)}
            >
              <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          {/* Personal Details */}
          <div className="personal-section">
            <h4 className="section-title">
              <i className="fas fa-user"></i>
              Personal Details
            </h4>
            <div className="personal-grid">
              <div className="personal-item">
                <i className="fas fa-calendar-alt"></i>
                <div>
                  <span className="personal-label">Date of Birth</span>
                  <span className="personal-value">{employee.dateOfBirth}</span>
                </div>
              </div>
              <div className="personal-item">
                <i className="fas fa-id-card"></i>
                <div>
                  <span className="personal-label">Aadhar Number</span>
                  <span className="personal-value font-mono">{employee.aadharNumber}</span>
                </div>
              </div>
              <div className="personal-item">
                <i className="fas fa-phone"></i>
                <div>
                  <span className="personal-label">Contact</span>
                  <span className="personal-value font-mono">{employee.phone}</span>
                </div>
              </div>
              <div className="personal-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className="personal-label">Address</span>
                  <span className="personal-value">{employee.address}</span>
                </div>
              </div>
              <div className="personal-item">
                <i className="fas fa-building"></i>
                <div>
                  <span className="personal-label">Department</span>
                  <span className="personal-value">{employee.department}</span>
                </div>
              </div>
              <div className="personal-item">
                <i className="fas fa-calendar-check"></i>
                <div>
                  <span className="personal-label">Joining Date</span>
                  <span className="personal-value">{employee.dateOfJoining}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="skills-section">
            <h4 className="section-title">
              <i className="fas fa-cogs"></i>
              Technical Skills
            </h4>
            <div className="skills-grid">
              <div className="skill-category">
                <div className="skill-tags">
                  {employee.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Educational Background */}
          <div className="education-section">
            <h4 className="section-title">
              <i className="fas fa-graduation-cap"></i>
              Educational Background
            </h4>
            <div className="education-list">
              {employee.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <div className="education-header">
                    <span className="education-qualification">{edu.qualification}</span>
                    <span className="education-year">{edu.year}</span>
                  </div>
                  <div className="education-details">
                    <span className="education-board">{edu.board}</span>
                    {edu.percentage !== "Pursuing" && (
                      <span className="education-percentage">{edu.percentage}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="emergency-section">
            <h4 className="section-title">
              <i className="fas fa-phone-alt"></i>
              Emergency Contact
            </h4>
            <div className="emergency-contact">
              <div className="emergency-item">
                <i className="fas fa-user-friends"></i>
                <div>
                  <span className="emergency-name">{employee.emergencyContact.name}</span>
                  <span className="emergency-relation">({employee.emergencyContact.relation})</span>
                </div>
              </div>
              <div className="emergency-phone">
                <i className="fas fa-phone"></i>
                <span className="font-mono">{employee.emergencyContact.phone}</span>
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
            <div className="data-matrix">
              <span>01001001</span>
              <span>01000100</span>
              <span>01000011</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;