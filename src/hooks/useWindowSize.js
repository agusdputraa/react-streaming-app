import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

function useWindowSize() {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    windowWidth,
    isMobile: windowWidth < MOBILE_BREAKPOINT,
    isTablet: windowWidth >= MOBILE_BREAKPOINT && windowWidth < TABLET_BREAKPOINT,
    isDesktop: windowWidth >= TABLET_BREAKPOINT,
  };
}

export default useWindowSize;
