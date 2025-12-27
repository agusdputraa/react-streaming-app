import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

function Pricing({ plans }) {
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const { isMobile, isTablet } = useWindowSize();



  // ============================================================================
  // STYLING - RESPONSIVE
  // ============================================================================

  const sectionStyle = {
    padding: isMobile ? '40px 8px' : isTablet ? '60px 40px' : '80px 60px',
    background: '#000',
    textAlign: 'center',
    borderTop: '8px solid #222',
  };

  const titleStyle = {
    fontSize: isMobile ? '20px' : isTablet ? '28px' : '36px',
    fontWeight: 700,
    marginBottom: isMobile ? '8px' : '12px',
    color: '#fff',
  };

  const subtitleStyle = {
    fontSize: isMobile ? '12px' : '18px',
    color: '#999',
    marginBottom: isMobile ? '20px' : '40px',
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: isMobile ? '4px' : '16px',
    flexWrap: isMobile ? 'nowrap' : 'wrap',
    marginBottom: isMobile ? '24px' : '40px',
    overflowX: isMobile ? 'auto' : 'visible',
    paddingBottom: isMobile ? '10px' : '0',
  };

  const cardBaseStyle = {
    width: isMobile ? '32%' : '220px',
    maxWidth: isMobile ? 'none' : '220px',
    minWidth: isMobile ? '100px' : 'auto',
    padding: isMobile ? '12px 6px' : '24px 20px',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    borderRadius: isMobile ? '8px' : '12px',
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    position: 'relative',
    textAlign: 'left',
    flexShrink: 0,
  };

  const cardHoverStyle = {
    ...cardBaseStyle,
    borderColor: '#e50914', 
    background: 'linear-gradient(135deg, #2d1f1f 0%, #1a1a2e 100%)', 
    transform: isMobile ? 'none' : 'scale(1.05)', 
  };

  const planNameStyle = {
    fontSize: isMobile ? '14px' : '20px',
    fontWeight: 600,
    marginBottom: isMobile ? '6px' : '12px',
    color: '#fff',
  };

  const priceStyle = {
    fontSize: isMobile ? '16px' : '28px',
    fontWeight: 700,
    color: '#fff',
    marginBottom: isMobile ? '10px' : '20px',
  };

  const priceSpanStyle = {
    fontSize: isMobile ? '10px' : '14px',
    fontWeight: 400,
    color: '#999',
    display: isMobile ? 'block' : 'inline',
  };

  const listStyle = {
    listStyle: 'none',
    padding: 0,
  };

  const listItemStyle = {
    fontSize: isMobile ? '10px' : '13px',
    color: '#aaa',
    marginBottom: isMobile ? '6px' : '10px',
    lineHeight: 1.3,
  };

  const labelStyle = {
    color: '#666',
    display: isMobile ? 'block' : 'inline',
    fontSize: isMobile ? '9px' : 'inherit',
  };

  const ctaStyle = {
    width: isMobile ? '100%' : 'auto',
    maxWidth: isMobile ? '320px' : 'none',
    padding: isMobile ? '12px 32px' : '16px 48px',
    fontSize: isMobile ? '16px' : '18px',
    fontWeight: 600,
    background: '#e50914',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  // ============================================================================
  // DISPLAY / HTML ELEMENT
  // ============================================================================

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Choose the plan that's right for you</h2>
      <p style={subtitleStyle}>Watch all you want. Cancel anytime.</p>
      
      <div style={gridStyle}>
        {plans.map(plan => (
          <div 
            key={plan.id}
            style={hoveredPlan === plan.id ? cardHoverStyle : cardBaseStyle}
            onMouseEnter={() => setHoveredPlan(plan.id)}
            onMouseLeave={() => setHoveredPlan(null)}
          >
            <h3 style={planNameStyle}>{plan.name}</h3>
            
            <p style={priceStyle}>
              {isMobile ? (plan.price / 1000) + 'K' : 'IDR ' + plan.price.toLocaleString()}
              <span style={priceSpanStyle}>/mo</span>
            </p>
            
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={labelStyle}>Quality:</span> {plan.quality}
              </li>
              <li style={listItemStyle}>
                <span style={labelStyle}>Res:</span> {plan.resolution}
              </li>
              <li style={listItemStyle}>
                <span style={labelStyle}>Devices:</span> 
                {isMobile ? 'All devices' : plan.devices}
              </li>
            </ul>
          </div>
        ))}
      </div>
      
      <button style={ctaStyle}>Get Started</button>
    </section>
  );
}

export default Pricing;
