import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

function MovieCard({ item, rank, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const { isMobile } = useWindowSize();

  // ============================================================================
  // STYLING - RESPONSIVE
  // ============================================================================

  const cardStyle = {
    flex: '0 0 auto',
    width: isMobile ? '120px' : '150px',
    height: isMobile ? '180px' : '225px',
    borderRadius: '4px',
    overflow: rank ? 'visible' : 'hidden', 
    position: 'relative',
    cursor: 'pointer',
    border: '2px solid transparent',
    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
    marginLeft: rank ? (isMobile ? '25px' : '30px') : '0', 
  };

  const activeCardStyle = {
    ...cardStyle,
    transform: 'scale(1.05)',
    zIndex: 10,
  };

  const cardImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: rank ? '6px' : '4px', 
  };

  const rankNumberStyle = {
    position: 'absolute',
    left: isMobile ? '-18px' : '-28px',
    bottom: 0,
    fontSize: isMobile ? '60px' : '90px',
    fontWeight: 900,
    color: '#000',
    lineHeight: 0.75,
    WebkitTextStroke: isMobile ? '1.5px #595959' : '2px #595959',
    zIndex: 10,
    pointerEvents: 'none',
  };

  const overlayStyle = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: isMobile ? '20px 6px 6px' : '40px 10px 10px',
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.9))',
    opacity: 0, 
    transition: 'opacity 0.3s ease',
  };

  const activeOverlayStyle = {
    ...overlayStyle,
    opacity: 1,
  };

  const titleStyle = {
    fontSize: isMobile ? '10px' : '13px',
    fontWeight: 600,
    marginBottom: '4px',
    color: '#fff',
  };

  const metaStyle = {
    display: 'flex',
    gap: isMobile ? '4px' : '8px',
    fontSize: isMobile ? '9px' : '11px',
    marginBottom: '4px',
  };

  const matchScoreStyle = {
    color: '#46d369',
    fontWeight: 600,
  };

  const ratingStyle = {
    border: '1px solid #808080',
    padding: '0 4px',
    fontSize: isMobile ? '8px' : '10px',
    color: '#ccc',
  };

  const genresStyle = {
    fontSize: isMobile ? '8px' : '10px',
    color: '#aaa',
  };

  // ============================================================================
  // DISPLAY / HTML ELEMENT
  // ============================================================================

  return (
    <div 
      style={isHovered ? activeCardStyle : cardStyle}
      onClick={() => onClick(item)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {rank && <span style={rankNumberStyle}>{rank}</span>}
      
      <img src={item.thumbnail} alt={item.title} style={cardImageStyle} />
      
      {!rank && (
        <div style={isHovered ? activeOverlayStyle : overlayStyle}>
          <h4 style={titleStyle}>{item.title}</h4>
          <div style={metaStyle}>
            <span style={matchScoreStyle}>{item.matchScore}%</span>
            <span style={ratingStyle}>{item.maturityRating}</span>
          </div>
          <div style={genresStyle}>{item.genre.slice(0, 2).join(' • ')}</div>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
