import { useRef } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import MovieCard from './MovieCard';

function Movies({ title, items, onItemClick, isFeatured = false }) {
  const rowRef = useRef(null);
  const { isMobile } = useWindowSize();

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = rowRef.current.offsetWidth * 0.8;
      rowRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // ============================================================================
  // STYLING - RESPONSIVE
  // ============================================================================

  const rowStyle = {
    marginBottom: isMobile ? '24px' : '40px',
    position: 'relative',
  };

  const titleStyle = {
    fontSize: isMobile ? '16px' : '22px',
    fontWeight: 600,
    marginBottom: isMobile ? '8px' : '12px',
    paddingLeft: isMobile ? '16px' : '60px',
    color: '#fff',
  };

  const featuredTitleStyle = {
    ...titleStyle,
    fontSize: isMobile ? '18px' : '26px',
    fontWeight: 700,
    marginBottom: isMobile ? '12px' : '16px',
  };

  const wrapperStyle = {
    position: 'relative',
  };

  const contentStyle = {
    display: 'flex',
    gap: isMobile ? '10px' : (isFeatured ? '15px' : '10px'),
    overflowX: 'auto',
    padding: isMobile ? '8px 16px' : '10px 60px',
    scrollBehavior: 'smooth',
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

  const scrollBtnBaseStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: isMobile ? '32px' : '50px',
    height: '100%',
    background: 'rgba(20, 20, 20, 0.8)',
    border: 'none',
    color: '#fff',
    fontSize: isMobile ? '28px' : '48px',
    cursor: 'pointer',
    zIndex: 20,
    opacity: 1,
    transition: 'opacity 0.2s ease',
  };

  const scrollLeftStyle = {
    ...scrollBtnBaseStyle,
    left: 0,
  };

  const scrollRightStyle = {
    ...scrollBtnBaseStyle,
    right: 0,
  };

  // ============================================================================
  // DISPLAY / HTML ELEMENT
  // ============================================================================

  return (
    <div style={rowStyle}>
      <h2 style={isFeatured ? featuredTitleStyle : titleStyle}>{title}</h2>
      
      <div style={wrapperStyle}>
        <button style={scrollLeftStyle} onClick={() => scroll('left')}>
          ‹
        </button>
        
        <div style={contentStyle} ref={rowRef}>
          {items.map((item, index) => (
            <MovieCard 
              key={item.id}
              item={item}
              rank={isFeatured ? index + 1 : undefined}
              onClick={onItemClick}
            />
          ))}
        </div>
        
        <button style={scrollRightStyle} onClick={() => scroll('right')}>
          ›
        </button>
      </div>
    </div>
  );
}

export default Movies;
