import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

const bounceAnimation = `
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-10px);}
  60% {transform: translateY(-5px);}
}
`;

function HeroSection({ onGetStarted }) {
  const [email, setEmail] = useState('');
  const { isMobile, isTablet } = useWindowSize();

  // ============================================================================
  // STYLING - RESPONSIVE
  // ============================================================================

  const heroStyle = {
    width: '100%',
    minHeight: '100vh', 
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundImage: `url('https://www.latestfreestuff.co.uk/wp-content/uploads/2014/07/cinema.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop: isMobile ? '56px' : '0',
    borderBottom: '8px solid #222', 
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)',
    zIndex: 2,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: isMobile ? '0 16px' : '0 20px',
    maxWidth: '800px',
  };

  const titleStyle = {
    fontSize: isMobile ? '32px' : isTablet ? '48px' : '64px',
    fontWeight: 700,
    marginBottom: isMobile ? '16px' : '20px',
    lineHeight: 1.1,
    color: '#fff',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '18px' : '24px',
    marginBottom: isMobile ? '16px' : '24px',
    color: '#fff',
  };

  const ctaTextStyle = {
    fontSize: isMobile ? '14px' : '18px',
    marginBottom: isMobile ? '16px' : '24px',
    color: '#fff',
  };

  const formStyle = {
    display: 'flex',
    gap: '0',
    justifyContent: 'center',
    flexDirection: isMobile ? 'column' : 'row',
    alignItems: 'center',
  };

  const inputStyle = {
    width: isMobile ? '100%' : '360px',
    maxWidth: '360px',
    padding: isMobile ? '14px 12px' : '18px 16px',
    fontSize: isMobile ? '14px' : '16px',
    border: '1px solid #808080',
    borderRadius: isMobile ? '4px' : '4px 0 0 4px',
    backgroundColor: 'rgba(22, 22, 22, 0.7)',
    color: '#fff',
    outline: 'none',
    marginBottom: isMobile ? '12px' : '0',
  };

  const buttonStyle = {
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '360px' : 'none',
    padding: isMobile ? '14px 24px' : '18px 28px',
    fontSize: isMobile ? '16px' : '20px',
    fontWeight: 600,
    backgroundColor: '#e50914',
    color: '#fff',
    border: 'none',
    borderRadius: isMobile ? '4px' : '0 4px 4px 0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  };

  const scrollIndicatorStyle = {
    position: 'absolute',
    bottom: isMobile ? '20px' : '30px',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    zIndex: 20,
    opacity: 0.8,
    animation: 'bounce 2s infinite',
    pointerEvents: 'none',
  };

  const scrollTextStyle = {
    fontSize: isMobile ? '12px' : '14px',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  };

  const arrowStyle = {
    fontSize: '20px',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onGetStarted) onGetStarted(email);
  };

  // ============================================================================
  // DISPLAY / HTML ELEMENT
  // ============================================================================

  return (
    <div style={heroStyle}>
      <style>{bounceAnimation}</style>
      
      <div style={overlayStyle} />
      
      <div style={contentStyle}>
        <h1 style={titleStyle}>
          Unlimited movies,<br />
          TV shows, and more
        </h1>
        
        <p style={subtitleStyle}>
          Starts at IDR 54,000. Cancel anytime.
        </p>
        
        <p style={ctaTextStyle}>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        
        <form style={formStyle} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>
            Get Started <span>›</span>
          </button>
        </form>
      </div>

      <div style={scrollIndicatorStyle}>
        <div style={scrollTextStyle}>
          {isMobile ? 'Swipe up for movies' : 'Scroll down for movies'}
        </div>
        <div style={arrowStyle}>
          {isMobile ? '↑' : '↓'}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
