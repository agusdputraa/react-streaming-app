import useWindowSize from '../hooks/useWindowSize';

function DetailModal({ content, isInMyList, onClose, onToggleMyList }) {
  const { isMobile } = useWindowSize();

  if (!content) return null;

  // ============================================================================
  // STYLINE - RESPONSIVE
  // ============================================================================

  const backdropStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.75)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: isMobile ? 'flex-start' : 'flex-start',
    padding: isMobile ? '0' : '40px 0',
    overflowY: 'auto',
    zIndex: 1000,
  };

  const modalContentStyle = {
    width: isMobile ? '100%' : '90%',
    maxWidth: '900px',
    background: '#181818',
    borderRadius: isMobile ? '0' : '8px',
    overflow: 'hidden',
    position: 'relative',
    boxShadow: '0 0 40px rgba(0, 0, 0, 0.8)',
    minHeight: isMobile ? '100vh' : 'auto',
  };

  const closeBtnStyle = {
    position: 'absolute',
    top: isMobile ? '12px' : '15px',
    right: isMobile ? '12px' : '15px',
    width: isMobile ? '32px' : '36px',
    height: isMobile ? '32px' : '36px',
    borderRadius: '50%',
    background: '#181818',
    border: 'none',
    color: '#fff',
    fontSize: isMobile ? '20px' : '24px',
    cursor: 'pointer',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const modalHeroStyle = {
    height: isMobile ? '250px' : '400px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
  };

  const heroOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(transparent 30%, #181818 100%)',
  };

  const heroContentStyle = {
    position: 'relative',
    zIndex: 5,
    padding: isMobile ? '16px 16px' : '30px 40px',
    width: '100%',
  };

  const heroTitleStyle = {
    fontSize: isMobile ? '24px' : '42px',
    fontWeight: 700,
    marginBottom: isMobile ? '12px' : '16px',
    color: '#fff',
  };

  const modalButtonsStyle = {
    display: 'flex',
    gap: isMobile ? '8px' : '10px',
  };

  const btnPlayStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '6px' : '8px',
    padding: isMobile ? '8px 16px' : '10px 24px',
    background: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '4px',
    fontSize: isMobile ? '14px' : '16px',
    fontWeight: 600,
    cursor: 'pointer',
  };

  const btnCircleStyle = {
    width: isMobile ? '32px' : '40px',
    height: isMobile ? '32px' : '40px',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.7)',
    background: 'rgba(42, 42, 42, 0.6)',
    color: '#fff',
    fontSize: isMobile ? '14px' : '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const btnCircleActiveStyle = {
    ...btnCircleStyle,
    borderColor: '#46d369',
    color: '#46d369',
  };

  const modalInfoStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '16px' : '30px',
    padding: isMobile ? '16px' : '20px 40px',
  };

  const infoLeftStyle = {
    flex: 2,
  };

  const infoRightStyle = {
    flex: 1,
  };

  const modalMetaStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: isMobile ? '8px' : '12px',
    marginBottom: isMobile ? '12px' : '16px',
    fontSize: isMobile ? '12px' : '14px',
    color: '#ddd',
  };

  const matchStyle = {
    color: '#46d369',
    fontWeight: 600,
  };

  const ratingBadgeStyle = {
    border: '1px solid #808080',
    padding: '0 6px',
    fontSize: isMobile ? '10px' : '12px',
  };

  const synopsisStyle = {
    fontSize: isMobile ? '13px' : '15px',
    lineHeight: 1.6,
    color: '#d2d2d2',
  };

  const infoLabelStyle = {
    fontSize: isMobile ? '12px' : '14px',
    color: '#888',
    marginBottom: isMobile ? '6px' : '8px',
  };

  const labelSpanStyle = {
    color: '#aaa',
  };

  const episodesContainerStyle = {
    padding: isMobile ? '16px' : '20px 40px 40px',
  };

  const episodesTitleStyle = {
    fontSize: isMobile ? '18px' : '22px',
    marginBottom: isMobile ? '12px' : '16px',
    color: '#fff',
  };

  const episodesListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: isMobile ? '12px' : '16px',
  };

  const episodeCardStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '12px' : '16px',
    padding: isMobile ? '12px' : '16px',
    background: '#2a2a2a',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const thumbnailContainerStyle = {
    position: 'relative',
    width: isMobile ? '100%' : '160px',
    height: isMobile ? '150px' : '90px',
    flexShrink: 0,
    borderRadius: '4px',
    overflow: 'hidden',
  };

  const thumbnailImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const playIconOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.5)',
    fontSize: isMobile ? '32px' : '24px',
  };

  const episodeInfoStyle = {
    flex: 1,
  };

  const episodeNameStyle = {
    fontSize: isMobile ? '14px' : '16px',
    marginBottom: '4px',
    color: '#fff',
  };

  const durationStyle = {
    fontSize: isMobile ? '11px' : '12px',
    color: '#aaa',
    marginBottom: isMobile ? '6px' : '8px',
  };

  const episodeDescStyle = {
    fontSize: isMobile ? '12px' : '13px',
    color: '#808080',
    lineHeight: 1.4,
  };


  // ============================================================================
  // DISPLAY / HTML ELEMENT
  // ============================================================================

  return (
    <div style={backdropStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
        <button style={closeBtnStyle} onClick={onClose}>×</button>
        
        <div 
          style={{ 
            ...modalHeroStyle, 
            backgroundImage: `url(${content.backdropImage || content.thumbnail})` 
          }}
        >
          <div style={heroOverlayStyle}></div>
          <div style={heroContentStyle}>
            <h1 style={heroTitleStyle}>{content.title}</h1>
            <div style={modalButtonsStyle}>
              <button style={btnPlayStyle}>▶ Play</button>
              <button 
                style={isInMyList ? btnCircleActiveStyle : btnCircleStyle}
                onClick={onToggleMyList}
              >
                {isInMyList ? '✓' : '+'}
              </button>
              <button style={btnCircleStyle}>👍</button>
            </div>
          </div>
        </div>
        
        <div style={modalInfoStyle}>
          <div style={infoLeftStyle}>
            <div style={modalMetaStyle}>
              <span style={matchStyle}>{content.matchScore}% Match</span>
              <span>{content.year}</span>
              <span style={ratingBadgeStyle}>{content.maturityRating}</span>
              <span>{content.episodes} Episodes</span>
            </div>
            <p style={synopsisStyle}>{content.synopsis}</p>
          </div>
          
          <div style={infoRightStyle}>
            <p style={infoLabelStyle}>
              <span style={labelSpanStyle}>Genres:</span> {content.genre.join(', ')}
            </p>
            <p style={infoLabelStyle}>
              <span style={labelSpanStyle}>Type:</span> {content.type === 'series' ? 'TV Series' : 'Movie'}
            </p>
          </div>
        </div>
        
        {content.type === 'series' && (
          <div style={episodesContainerStyle}>
            <h3 style={episodesTitleStyle}>Episodes</h3>
            <div style={episodesListStyle}>
              {Array.from({ length: Math.min(content.episodes, 5) }, (_, i) => (
                <div key={i} style={episodeCardStyle}>
                  <div style={thumbnailContainerStyle}>
                    <img src={content.thumbnail} alt={`Episode ${i + 1}`} style={thumbnailImageStyle} />
                    <span style={playIconOverlayStyle}>▶</span>
                  </div>
                  <div style={episodeInfoStyle}>
                    <h4 style={episodeNameStyle}>{i + 1}. Episode {i + 1}</h4>
                    <p style={durationStyle}>45m</p>
                    <p style={episodeDescStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailModal;
