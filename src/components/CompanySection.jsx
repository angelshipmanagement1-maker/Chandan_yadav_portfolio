import React, { useState } from 'react';
import { companyInfo } from '../data/employees';
import './CompanySection.css';

const CompanySection = () => {
  const [activeService, setActiveService] = useState(0);

  const serviceCategories = [
    {
      title: "Panama Flag Documentation",
      services: ["Panama CDC", "Panama Watch-keeping & COP Endorsement", "Panama GMDSS", "Tanker Endorsement", "Panama COE", "Panama COC", "Panama Renewal & Upgradation"]
    },
    {
      title: "Palau Flag Documentation", 
      services: ["Palau CDC", "Palau COE", "Palau COC"]
    },
    {
      title: "St. Kitts & Nevis Flag Documentation",
      services: ["St. Kitts & Nevis CDC", "St. Kitts & Nevis COE", "St. Kitts & Nevis COC"]
    },
    {
      title: "Other Flag States",
      services: ["Gabon Documentation", "Cook Islands Documentation", "Liberia Documentation", "Honduras Documentation", "Marshall Islands Documentation"]
    }
  ];

  return (
    <div className="company-section">
      <div className="company-container">
        {/* Header */}
        <div className="company-header">
          <div className="header-icon">
            <i className="fas fa-building"></i>
          </div>
          <div className="header-content">
            <h1 className="company-title font-primary glow-text">
              {companyInfo.name}
            </h1>
            <p className="company-subtitle">
              {companyInfo.industry}
            </p>
          </div>
          <div className="header-badge">
            <span className="established-badge">
              Est. {companyInfo.established}
            </span>
          </div>
        </div>

        {/* Company Overview */}
        <div className="company-overview">
          <div className="overview-content">
            <div className="overview-text">
              <h2 className="overview-title">About Our Company</h2>
              <p className="overview-description">
                {companyInfo.description} Our team is highly experienced and well versed with 
                shipping industry matters and receives regular training. They ensure that we 
                deliver a prompt and first class professional service in guiding you through 
                the whole journey of a Seafarer's Documentation procedure.
              </p>
              <div className="overview-stats">
                <div className="stat-item">
                  <div className="stat-number">8+</div>
                  <div className="stat-label">Flag States</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Documents Processed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Support</div>
                </div>
              </div>
            </div>
            <div className="overview-visual">
              <div className="company-logo-large">
                <i className="fas fa-anchor"></i>
              </div>
              <div className="visual-effects">
                <div className="orbit orbit-1"></div>
                <div className="orbit orbit-2"></div>
                <div className="orbit orbit-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-cogs"></i>
              Our Services
            </h2>
            <p className="section-subtitle">
              Comprehensive flag documentation services for maritime professionals
            </p>
          </div>

          <div className="services-content">
            <div className="service-categories">
              {serviceCategories.map((category, index) => (
                <button
                  key={index}
                  className={`category-button ${activeService === index ? 'active' : ''}`}
                  onClick={() => setActiveService(index)}
                >
                  <i className="fas fa-flag"></i>
                  <span>{category.title}</span>
                </button>
              ))}
            </div>

            <div className="service-details">
              <div className="service-list">
                <h3 className="service-category-title">
                  {serviceCategories[activeService].title}
                </h3>
                <div className="service-items">
                  {serviceCategories[activeService].services.map((service, index) => (
                    <div key={index} className="service-item">
                      <div className="service-icon">
                        <i className="fas fa-certificate"></i>
                      </div>
                      <span className="service-name">{service}</span>
                      <div className="service-status">
                        <i className="fas fa-check-circle"></i>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Services Highlight */}
        <div className="key-services">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-star"></i>
              Key Services
            </h2>
          </div>
          <div className="key-services-grid">
            {companyInfo.keyServices.map((service, index) => (
              <div key={index} className="key-service-card">
                <div className="service-card-icon">
                  <i className={`fas ${
                    index === 0 ? 'fa-ship' : 
                    index === 1 ? 'fa-certificate' : 
                    index === 2 ? 'fa-radio' : 'fa-users'
                  }`}></i>
                </div>
                <div className="service-card-content">
                  <h4>{service}</h4>
                </div>
                <div className="service-card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="company-contact">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-phone"></i>
              Contact Information
            </h2>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="contact-content">
                <h4>Office Address</h4>
                <p>{companyInfo.address}</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-content">
                <h4>Phone Numbers</h4>
                <p className="font-mono">{companyInfo.phone}</p>
                <div className="mobile-numbers">
                  {companyInfo.mobile.map((mobile, index) => (
                    <span key={index} className="font-mono">{mobile}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-content">
                <h4>Email</h4>
                <p className="font-mono">{companyInfo.email}</p>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="contact-content">
                <h4>Website</h4>
                <a href={companyInfo.website} target="_blank" rel="noopener noreferrer">
                  {companyInfo.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="company-values">
          <div className="section-header">
            <h2 className="section-title">
              <i className="fas fa-compass"></i>
              Our Values
            </h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h4>Reliability</h4>
              <p>Trusted documentation services with guaranteed accuracy and timeliness.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-rocket"></i>
              </div>
              <h4>Efficiency</h4>
              <p>Streamlined processes ensuring quick turnaround times for all documentation.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h4>Partnership</h4>
              <p>Building long-term relationships with ship owners, managers, and agencies.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <i className="fas fa-award"></i>
              </div>
              <h4>Excellence</h4>
              <p>Committed to delivering first-class professional service in all aspects.</p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="company-decorations">
          <div className="floating-anchors">
            <div className="anchor anchor-1">
              <i className="fas fa-anchor"></i>
            </div>
            <div className="anchor anchor-2">
              <i className="fas fa-ship"></i>
            </div>
            <div className="anchor anchor-3">
              <i className="fas fa-compass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySection;