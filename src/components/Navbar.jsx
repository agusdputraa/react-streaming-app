import {useState} from 'react'
import useWindowSize from '../hooks/useWindowSize'

function Navbar() {
    const {isMobile} = useWindowSize()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    // =====================================================================
    // STYLING SETTING - RESPONSIVE
    // =====================================================================
    const navStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: isMobile ? '100px' : '70px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '0px 16px' : '0px 60px',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 10%, transparent)',
        zIndex: 100,
    }

    const leftStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: isMobile ? '16px' : '40px',
    }

    const logoStyle = {
        fontSize: isMobile ? '20px' : '28px',
        fontWeight: 700,
        letterSpacing: '2px',
        color: '#e50914' 
    }
  const menuStyle = {
    display: isMobile ? 'none' : 'flex', // Sembunyikan di mobile
    gap: '20px',
    listStyle: 'none',
  };

  const menuItemStyle = {
    color: '#e5e5e5',
    fontSize: '14px',
    cursor: 'pointer',
  };

  const menuItemActiveStyle = {
    ...menuItemStyle,
    color: '#fff',
    fontWeight: 500,
  };

  const rightStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: isMobile ? '12px' : '20px',
  };

  const iconStyle = {
    fontSize: isMobile ? '18px' : '20px',
    cursor: 'pointer',
  };

  const profileImgStyle = {
    width: isMobile ? '28px' : '32px',
    height: isMobile ? '28px' : '32px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const hamburgerStyle = {
    display: isMobile ? 'flex' : 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    padding: '4px',
  };

  const hamburgerLineStyle = {
    width: '20px',
    height: '2px',
    backgroundColor: '#fff',
    margin: '2px 0',
    borderRadius: '2px',
    transition: 'all 0.3s ease',
  };

  const mobileMenuOverlayStyle = {
    position: 'fixed',
    top: '56px',
    left: 0,
    right: 0,
    bottom: 0,
    
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    zIndex: 99,
    
    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
    transition: 'transform 0.3s ease',
    
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  };

  const mobileMenuItemStyle = {
    fontSize: '18px',
    fontWeight: 500,
    padding: '16px 0',
    cursor: 'pointer',
    listStyle: 'none',
    color: '#fff',
    borderBottom: '1px solid #333',
  };

  const mobileMenuItemActiveStyle = {
    ...mobileMenuItemStyle,
    color: '#e50914',
  };

  // ============================================================================
  // DISPLAY / HTML ELEMENT
  // ============================================================================

  return (
    <>
      <nav style={navStyle}>
        <div style={leftStyle}>
          <button 
            style={hamburgerStyle} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span style={hamburgerLineStyle}></span>
            <span style={hamburgerLineStyle}></span>
            <span style={hamburgerLineStyle}></span>
          </button>

          <h1 style={logoStyle}>diStreaming</h1>

          <ul style={menuStyle}>
            <li style={menuItemActiveStyle}>Home</li>
            <li style={menuItemStyle}>TV Shows</li>
            <li style={menuItemStyle}>Movies</li>
            <li style={menuItemStyle}>New & Popular</li>
            <li style={menuItemStyle}>My List</li>
          </ul>
        </div>

        <div style={rightStyle}>
          <span style={iconStyle}>🔍</span>
          <span style={iconStyle}>🔔</span>
          <div>
            <img 
              src="https://www.pngmart.com/files/23/Profile-PNG-Photo.png" 
              alt="Profile"
              style={profileImgStyle}
            />
          </div>
        </div>
      </nav>

      {isMobile && (
        <div style={mobileMenuOverlayStyle}>
          <ul style={{ padding: 0, margin: 0 }}>
            <li style={mobileMenuItemActiveStyle} onClick={closeMenu}>Home</li>
            <li style={mobileMenuItemStyle} onClick={closeMenu}>TV Shows</li>
            <li style={mobileMenuItemStyle} onClick={closeMenu}>Movies</li>
            <li style={mobileMenuItemStyle} onClick={closeMenu}>New & Popular</li>
            <li style={mobileMenuItemStyle} onClick={closeMenu}>My List</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;