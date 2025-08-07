import React, { useState, useEffect } from 'react';
import { companyInfo } from '../data/employees';
import { useAutoProfileAdjustment } from '../hooks/useResponsive';
import './ProfileCardNew.css';

const ProfileCard = ({ employee }) => {
  const [currentTime, setCurrentTime] = useState(new Date());
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

  // Get the correct photo path
  const getPhotoPath = () => {
    // Use the direct path to maintain quality
    return `./bhushan1.jpg`;
  };

  const handlePhotoError = (e, isDesktop = false) => {
    console.log(`${isDesktop ? 'Desktop' : 'Mobile'} photo failed to load:`, e.target.src);
    
    // Use a high-quality SVG fallback
    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMWEyMzMyIi8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iIzAwZmZmZiIvPgo8cGF0aCBkPSJNNjAgMTYwQzYwIDEzNS44IDc1LjggMTIwIDEwMCAxMjBTMTQwIDEzNS44IDE0MCAxNjBINjBaIiBmaWxsPSIjMDBmZmZmIi8+Cjx0ZXh0IHg9IjEwMCIgeT0iMTkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDBmZmZmIiBmb250LXNpemU9IjEyIj5TUDwvdGV4dD4KPC9zdmc+';


  };

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        {/* Desktop Compact Card */}
        <div className="desktop-card">
          {/* Header with Company Info */}
          <div className="card-header">
            <div className="company-logo">
              <div className="logo-icon">⚓</div>
            </div>
            <div className="company-info">
              <h3 className="company-name">{companyInfo.name}</h3>
              <p className="company-tagline">{companyInfo.tagline}</p>
            </div>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span className="status-text">ACTIVE</span>
            </div>
          </div>

          {/* Photo Section */}
          <div className="photo-section">
            <div className="photo-frame">
              <img 
                src={getPhotoPath()} 
                alt={employee.name}
                className="employee-photo"
                loading="eager"
                decoding="sync"
                style={{
                  imageRendering: 'high-quality'
                }}
                onLoad={() => console.log('Desktop photo loaded successfully')}
                onError={(e) => handlePhotoError(e, true)}
              />
              <div className="photo-glow"></div>
            </div>
          </div>

          {/* Information Section - Desktop Compact */}
          <div className="info-section">
            <div className="primary-info">
              <h2 className="employee-name">
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
          </div>

          {/* Footer */}
          <div className="card-footer">
            <div className="footer-info">
              <span className="issue-date">Issued: {formatDate(employee.issueDate)}</span>
              <span className="valid-until">Valid Until: {formatDate(employee.validUntil)}</span>
            </div>
          </div>
        </div>

        {/* Mobile Full Card */}
        <div className="mobile-card">
          {/* Header with Company Info */}
          <div className="card-header">
            <div className="company-logo">
              <div className="logo-icon">⚓</div>
            </div>
            <div className="company-info">
              <h3 className="company-name">{companyInfo.name}</h3>
              <p className="company-tagline">{companyInfo.tagline}</p>
            </div>
            <div className="status-indicator">
              <div className="status-dot"></div>
              <span className="status-text">ACTIVE</span>
            </div>
          </div>

          {/* Photo Section */}
          <div className="photo-section">
            <div className="photo-frame">
              <img 
                src={getPhotoPath()} 
                alt={employee.name}
                className="employee-photo"
                loading="eager"
                decoding="sync"
                style={{
                  imageRendering: 'high-quality'
                }}
                onLoad={() => console.log('Mobile photo loaded successfully')}
                onError={(e) => handlePhotoError(e, false)}
              />
              <div className="photo-glow"></div>
            </div>
          </div>

          {/* Information Section */}
          <div className="info-section">
            <div className="primary-info">
              <h2 className="employee-name">
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

            {/* Quick Details Grid */}
            <div className="details-grid">
              <div className="detail-item">
                <div className="detail-icon">📱</div>
                <div className="detail-content">
                  <span className="detail-label">Phone</span>
                  <span className="detail-value">{employee.phone}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">🩸</div>
                <div className="detail-content">
                  <span className="detail-label">Blood Group</span>
                  <span className="detail-value">{employee.bloodGroup}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">📍</div>
                <div className="detail-content">
                  <span className="detail-label">Location</span>
                  <span className="detail-value">Mumbai, India</span>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">🎂</div>
                <div className="detail-content">
                  <span className="detail-label">Age</span>
                  <span className="detail-value">{calculateAge(employee.dateOfBirth)} years</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Sections - Mobile Only */}
          <div className="additional-info">
            {/* Personal Information */}
            <div className="info-section-card">
              <h4 className="section-title">Personal Information</h4>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Date of Birth</span>
                  <span className="info-value">{employee.dateOfBirth}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Nationality</span>
                  <span className="info-value">{employee.nationality}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Height</span>
                  <span className="info-value">{employee.height}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Eye Color</span>
                  <span className="info-value">{employee.eyeColor}</span>
                </div>
              </div>
            </div>

            {/* Education - Only show if education data exists */}
            {employee.education && employee.education.length > 0 && (
              <div className="info-section-card">
                <h4 className="section-title">Education</h4>
                <div className="education-list">
                  {employee.education.map((edu, index) => (
                    <div key={index} className="education-item">
                      <div className="education-qualification">{edu.qualification}</div>
                      <div className="education-details">
                        <span>{edu.board} • {edu.year} • {edu.percentage}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            <div className="info-section-card">
              <h4 className="section-title">Skills & Expertise</h4>
              <div className="skills-grid">
                {employee.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="info-section-card">
              <h4 className="section-title">Emergency Contact</h4>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-label">Name</span>
                  <span className="info-value">{employee.emergencyContact.name}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Relation</span>
                  <span className="info-value">{employee.emergencyContact.relation}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Phone</span>
                  <span className="info-value">{employee.emergencyContact.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="card-footer">
            <div className="footer-info">
              <span className="issue-date">Issued: {formatDate(employee.issueDate)}</span>
              <span className="valid-until">Valid Until: {formatDate(employee.validUntil)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;