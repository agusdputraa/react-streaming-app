import useWindowSize from '../hooks/useWindowSize';

function Footer() {
  const { isMobile, isTablet } = useWindowSize();

  const footerLinks = [
    ['FAQ', 'Help Center', 'Account', 'Media Center'],
    ['Investor Relations', 'Jobs', 'Ways to Watch', 'Terms of Use'],
    ['Privacy', 'Cookie Preferences', 'Corporate Information', 'Contact Us'],
    ['Speed Test', 'Legal Notices', 'Only on diStreaming', 'Gift Cards'],
  ];

  // ============================================================================
  // STYLING - RESPONSIVE
  // ============================================================================

  const footerStyle = {
    padding: isMobile ? '40px 16px 32px' : '60px 60px 40px',
    background: '#000',
    borderTop: '8px solid #222',
  };

  const contentStyle = {
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const contactStyle = {
    fontSize: isMobile ? '14px' : '16px',
    color: '#999',
    marginBottom: isMobile ? '20px' : '30px',
  };

  const contactLinkStyle = {
    color: '#999',
    textDecoration: 'underline',
  };

  const linksGridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)',
    gap: isMobile ? '16px' : '20px',
    marginBottom: isMobile ? '20px' : '30px',
  };

  const linkListStyle = {
    listStyle: 'none',
  };

  const linkItemStyle = {
    marginBottom: isMobile ? '10px' : '14px',
  };

  const linkStyle = {
    fontSize: isMobile ? '12px' : '13px',
    color: '#808080',
    textDecoration: 'none',
  };

  const languageContainerStyle = {
    marginBottom: isMobile ? '16px' : '20px',
  };

  const selectStyle = {
    padding: isMobile ? '10px 32px 10px 12px' : '12px 40px 12px 16px',
    background: 'transparent',
    border: '1px solid #808080',
    color: '#999',
    fontSize: isMobile ? '12px' : '14px',
    cursor: 'pointer',
  };

  const copyrightStyle = {
    fontSize: isMobile ? '11px' : '13px',
    color: '#606060',
  };

  // ============================================================================
  // DISPLAY / HTML ELEMENT
  // ============================================================================

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <p style={contactStyle}>
          Questions? Call <a href="tel:0812-3456-7890" style={contactLinkStyle}>0812-3456-7890</a>
        </p>
        
        <div style={linksGridStyle}>
          {footerLinks.map((column, colIndex) => (
            <ul key={colIndex} style={linkListStyle}>
              {column.map((link, linkIndex) => (
                <li key={linkIndex} style={linkItemStyle}>
                  <a href="#" style={linkStyle}>{link}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        
        <div style={languageContainerStyle}>
          <select style={selectStyle}>
            <option value="id">🌐 Bahasa Indonesia</option>
            <option value="en">🌐 English</option>
          </select>
        </div>
        
        <p style={copyrightStyle}>diStreaming Indonesia</p>
      </div>
    </footer>
  );
}

export default Footer;
