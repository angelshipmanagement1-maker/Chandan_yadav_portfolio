import React, { useState, useEffect, useCallback, useRef } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import Header from './components/Header';
import ProfileCard from './components/ProfileCardFixed';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CompanySection from './components/CompanySection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CombinedEffects from './components/CombinedEffects';
import WhatsAppButton from './components/WhatsAppButton';

import { employee, navigationItems } from './data/employees';
import { useAutoProfileAdjustment } from './hooks/useResponsive';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('profile');
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { particleConfig } = useAutoProfileAdjustment();

  // Refs for smooth scrolling
  const profileRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const companyRef = useRef(null);

  useEffect(() => {
    // Simulate loading time for better UX
    const loadData = async () => {
      setIsLoading(true);
      
      // Reduced loading time for better UX
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setIsLoading(false);
      
      // Show content with animation delay
      setTimeout(() => setIsContentVisible(true), 300);
    };

    loadData();
  }, []);

  // Particles.js initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // Particles loaded callback
  }, []);

  // Enhanced particles configuration with animation effects
  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ["push", "bubble"],
        },
        onHover: {
          enable: true,
          mode: ["repulse", "grab"],
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 3,
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
        bubble: {
          distance: 200,
          size: 8,
          duration: 2,
          opacity: 0.8,
        },
        grab: {
          distance: 200,
          links: {
            opacity: 0.8,
          },
        },
      },
    },
    particles: {
      color: {
        value: ["#00ffff", "#00ff88", "#ff0080"],
      },
      links: {
        color: "#00ffff",
        distance: particleConfig.linkDistance,
        enable: true,
        opacity: 0.3,
        width: 1,
        triangles: {
          enable: true,
          opacity: 0.1,
        },
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true,
        speed: particleConfig.speed,
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: particleConfig.particleCount,
      },
      opacity: {
        value: { min: 0.1, max: particleConfig.opacity },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: ["circle", "triangle", "polygon"],
        polygon: {
          sides: 6,
        },
      },
      size: {
        value: { min: 1, max: 4 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.5,
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.05,
          opacity: 1,
        },
      },
    },
    detectRetina: true,
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const refs = {
      profile: profileRef,
      about: aboutRef,
      contact: contactRef,
      company: companyRef
    };

    const targetRef = refs[sectionId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionId);
    }
  };

  // Intersection Observer for active section detection
  useEffect(() => {
    if (isLoading) return;

    const observers = [];
    const sections = [
      { ref: profileRef, name: 'profile' },
      { ref: aboutRef, name: 'about' },
      { ref: contactRef, name: 'contact' },
      { ref: companyRef, name: 'company' }
    ];

    sections.forEach(({ ref, name }) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(name);
            }
          },
          { 
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
          }
        );
        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="app">
      {/* Combined Background Effects */}
      <CombinedEffects />
      
      {/* Enhanced Particles.js Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesConfig}
        className="particles-background"
      />
      
      <div className="app-container">
        <Header 
          navigationItems={navigationItems}
          activeSection={activeSection}
          onNavigate={scrollToSection}
        />
        
        <main className="main-content">
          {/* Profile Section - Hero/Main */}
          <section 
            ref={profileRef} 
            id="profile" 
            className={`app-section profile-section ${isContentVisible ? 'visible' : ''}`}
          >
            <div className="section-container">
              <div className="profile-hero">
                <ProfileCard employee={employee} />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section 
            ref={aboutRef} 
            id="about" 
            className="app-section about-section-wrapper"
          >
            <div className="section-container">
              <AboutSection />
            </div>
          </section>

          {/* Contact Section */}
          <section 
            ref={contactRef} 
            id="contact" 
            className="app-section contact-section-wrapper"
          >
            <div className="section-container">
              <ContactSection />
            </div>
          </section>

          {/* Company Section */}
          <section 
            ref={companyRef} 
            id="company" 
            className="app-section company-section-wrapper"
          >
            <div className="section-container">
              <CompanySection />
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
      
      {/* WhatsApp Quick Action */}
      <WhatsAppButton 
        phoneNumber={employee.phone}
        name={employee.name}
      />
      
      {/* Minimal Cyber Effects */}
      <div className="cyber-grid"></div>
    </div>
  );
}

export default App;