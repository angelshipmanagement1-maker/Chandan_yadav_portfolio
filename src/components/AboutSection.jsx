import React from 'react';
import { employee } from '../data/employees';
import './AboutSection.css';

const AboutSection = () => {
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
    <div className="about-section">
      <div className="about-container">
        {/* Header */}
        <div className="about-header">
          <div className="header-icon">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="header-content">
            <h1 className="about-title font-primary glow-text">
              About {employee.name.split(' ')[0]}
            </h1>
            <p className="about-subtitle">
              {employee.designation} • {employee.department}
            </p>
          </div>
          <div className="header-decoration">
            <div className="deco-line"></div>
            <div className="deco-dot"></div>
            <div className="deco-line"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="about-content">
          {/* Personal Overview */}
          <div className="overview-section">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-info-circle"></i>
                Personal Overview
              </h2>
            </div>
            <div className="overview-grid">
              <div className="overview-card">
                <div className="card-icon">
                  <i className="fas fa-birthday-cake"></i>
                </div>
                <div className="card-content">
                  <h3>Age</h3>
                  <p>{calculateAge(employee.dateOfBirth)} years old</p>
                  <span className="card-detail">Born on {employee.dateOfBirth}</span>
                </div>
              </div>
              
              <div className="overview-card">
                <div className="card-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="card-content">
                  <h3>Experience</h3>
                  <p>{calculateExperience(employee.dateOfJoining)}</p>
                  <span className="card-detail">Since {employee.dateOfJoining}</span>
                </div>
              </div>
              
              <div className="overview-card">
                <div className="card-icon">
                  <i className="fas fa-code"></i>
                </div>
                <div className="card-content">
                  <h3>Code Name</h3>
                  <p className="font-mono">{employee.codeName}</p>
                  <span className="card-detail">Security Identifier</span>
                </div>
              </div>
              
              <div className="overview-card">
                <div className="card-icon">
                  <i className="fas fa-tint"></i>
                </div>
                <div className="card-content">
                  <h3>Blood Group</h3>
                  <p className="font-mono">{employee.bloodGroup}</p>
                  <span className="card-detail">Medical Information</span>
                </div>
              </div>
            </div>
          </div>

          {/* Educational Journey */}
          <div className="education-section">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-graduation-cap"></i>
                Educational Journey
              </h2>
            </div>
            <div className="education-timeline">
              {employee.education && employee.education.length > 0 ? (
                employee.education.map((edu, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                      <div className="marker-line"></div>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3 className="timeline-title">{edu.qualification}</h3>
                        <span className="timeline-year">{edu.year}</span>
                      </div>
                      <p className="timeline-institution">{edu.board}</p>
                      {edu.percentage !== "Pursuing" && (
                        <div className="timeline-grade">
                          <i className="fas fa-star"></i>
                          <span>{edu.percentage}</span>
                        </div>
                      )}
                      {edu.percentage === "Pursuing" && (
                        <div className="timeline-status">
                          <i className="fas fa-clock"></i>
                          <span>Currently Pursuing</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-education-message">
                  <div className="timeline-item">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h3 className="timeline-title">Professional Experience</h3>
                        <span className="timeline-year">27+ Years</span>
                      </div>
                      <p className="timeline-institution">Maritime Industry Leadership</p>
                      <div className="timeline-grade">
                        <i className="fas fa-briefcase"></i>
                        <span>Founder & Public Relations Officer</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="skills-section">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-cogs"></i>
                Skills & Expertise
              </h2>
            </div>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Dispatch Management</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Document Dispatch Management</span>
                  <span className="skill-tag">Logistics & Delivery Coordination</span>
                  <span className="skill-tag">Quality Control & Verification</span>
                  <span className="skill-tag">Process Optimization</span>
                  <span className="skill-tag">Team Supervision</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Maritime Operations</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Document Packaging & Safety</span>
                  <span className="skill-tag">Tracking & Delivery Confirmation</span>
                  <span className="skill-tag">Shipping Standards Compliance</span>
                  <span className="skill-tag">Maritime Document Handling</span>
                  <span className="skill-tag">Record Maintenance</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Leadership Skills</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Task Allocation</span>
                  <span className="skill-tag">Quality Assurance</span>
                  <span className="skill-tag">Process Management</span>
                  <span className="skill-tag">Reporting & Documentation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="summary-section">
            <div className="section-header">
              <h2 className="section-title">
                <i className="fas fa-user-tie"></i>
                Professional Summary
              </h2>
            </div>
            <div className="summary-content">
              <p>
                As the <strong>Dispatch Head</strong> at Angel Seafarer Documentation,
                {employee.name.split(' ')[0]} leads the end-to-end document handling and quality assurance
                process. With over 9 years of experience in logistics and dispatch operations, he serves as
                the final checkpoint in the documentation workflow, ensuring accuracy and integrity of all
                outgoing seafarer documents.
              </p>
              <p>
                His responsibilities include managing document dispatch operations, conducting quality control
                and final verification, overseeing document packaging and safety handling, and coordinating
                logistics and delivery confirmation. {employee.name.split(' ')[0]}'s leadership in dispatch
                operations minimizes errors and maintains the company's reputation for reliable document
                handling in the maritime industry.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="about-decorations">
          <div className="floating-elements">
            <div className="float-element element-1">
              <i className="fas fa-anchor"></i>
            </div>
            <div className="float-element element-2">
              <i className="fas fa-microchip"></i>
            </div>
            <div className="float-element element-3">
              <i className="fas fa-ship"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;