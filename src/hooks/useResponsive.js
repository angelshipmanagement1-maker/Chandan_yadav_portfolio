import { useState, useEffect } from 'react';

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth <= 768,
    isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
    isDesktop: window.innerWidth > 1024,
    isSmallMobile: window.innerWidth <= 480,
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({
        width,
        height,
        isMobile: width <= 768,
        isTablet: width > 768 && width <= 1024,
        isDesktop: width > 1024,
        isSmallMobile: width <= 480,
      });
    };

    // Debounce resize events
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 150);
    };

    window.addEventListener('resize', debouncedResize);
    
    // Initial call
    handleResize();

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return screenSize;
};

export const useAutoProfileAdjustment = () => {
  const screenSize = useResponsive();
  
  const getProfileCardConfig = () => {
    if (screenSize.isSmallMobile) {
      return {
        cardHeight: '520px',
        cardWidth: '320px',
        photoSize: '110px',
        fontSize: {
          name: '1.1rem',
          designation: '0.9rem',
          code: '1rem',
        },
        spacing: 'compact',
        gridColumns: 1,
      };
    } else if (screenSize.isMobile) {
      return {
        cardHeight: '550px',
        cardWidth: '350px',
        photoSize: '130px',
        fontSize: {
          name: '1.3rem',
          designation: '1rem',
          code: '1.1rem',
        },
        spacing: 'normal',
        gridColumns: 1,
      };
    } else if (screenSize.isTablet) {
      return {
        cardHeight: '580px',
        cardWidth: '380px',
        photoSize: '150px',
        fontSize: {
          name: '1.5rem',
          designation: '1.1rem',
          code: '1.2rem',
        },
        spacing: 'comfortable',
        gridColumns: 2,
      };
    } else {
      return {
        cardHeight: '650px',
        cardWidth: '420px',
        photoSize: '180px',
        fontSize: {
          name: '1.8rem',
          designation: '1.2rem',
          code: '1.3rem',
        },
        spacing: 'spacious',
        gridColumns: 2,
      };
    }
  };

  const getParticleConfig = () => {
    if (screenSize.isSmallMobile) {
      return {
        particleCount: 30,
        opacity: 0.2,
        speed: 0.8,
        linkDistance: 80,
      };
    } else if (screenSize.isMobile) {
      return {
        particleCount: 40,
        opacity: 0.3,
        speed: 1,
        linkDistance: 100,
      };
    } else if (screenSize.isTablet) {
      return {
        particleCount: 50,
        opacity: 0.4,
        speed: 1.2,
        linkDistance: 120,
      };
    } else {
      return {
        particleCount: 60,
        opacity: 0.5,
        speed: 1.5,
        linkDistance: 150,
      };
    }
  };

  return {
    screenSize,
    profileConfig: getProfileCardConfig(),
    particleConfig: getParticleConfig(),
  };
};