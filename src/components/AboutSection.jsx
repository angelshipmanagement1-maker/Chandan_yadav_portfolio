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
                <h3>Accounting Software</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Tally ERP</span>
                  <span className="skill-tag">MS Excel (Advanced)</span>
                  <span className="skill-tag">Google Sheets</span>
                  <span className="skill-tag">Financial Modeling</span>
                  <span className="skill-tag">Pivot Tables</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Financial Management</h3>
                <div className="skill-tags">
                  <span className="skill-tag">GST Filing & Taxation</span>
                  <span className="skill-tag">Invoice Generation</span>
                  <span className="skill-tag">Bank Reconciliation (BRS)</span>
                  <span className="skill-tag">Ledger Management</span>
                  <span className="skill-tag">Journal Entries</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Professional Skills</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Payroll Handling</span>
                  <span className="skill-tag">Financial Reporting</span>
                  <span className="skill-tag">MIS Reports</span>
                  <span className="skill-tag">Basic Audit Preparation</span>
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
                As the <strong>Accounts Head</strong> at Angel Seafarer Documentation,
                {employee.name.split(' ')[0]} brings expertise in financial management and accounting
                operations. With a Bachelor's degree in Commerce and specialized skills in accounting
                software like Tally ERP, he plays a crucial role in maintaining the company's financial
                health and ensuring compliance with taxation and regulatory requirements.
              </p>
              <p>
                His responsibilities include managing company accounts, preparing financial statements,
                handling GST filing and tax compliance, processing invoices and billing systems, and
                maintaining accurate ledgers and journal entries. {employee.name.split(' ')[0]}'s attention
                to detail and proficiency in financial reporting ensures smooth financial operations and
                supports the company's growth in the maritime documentation industry.
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