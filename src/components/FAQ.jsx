import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';

function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);
  const { isMobile } = useWindowSize();



  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ============================================================================
  // STYLING - RESPONSIVE
  // ============================================================================

  const sectionStyle = {
    padding: isMobile ? '40px 16px' : '80px 60px',
    background: '#000',
    borderTop: '8px solid #222',
  };

  const titleStyle = {
    fontSize: isMobile ? '22px' : '36px',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: isMobile ? '24px' : '40px',
    color: '#fff',
  };

  const listStyle = {
    maxWidth: '800px',
    margin: '0 auto',
  };

  const itemStyle = {
    marginBottom: isMobile ? '6px' : '8px',
  };

  const questionBaseStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: isMobile ? '16px 16px' : '24px 28px',
    background: '#2d2d2d',
    border: 'none',
    color: '#fff',
    fontSize: isMobile ? '14px' : '18px',
    fontWeight: 400,
    textAlign: 'left',
    cursor: 'pointer',
  };

  const iconStyle = {
    fontSize: isMobile ? '24px' : '32px',
    fontWeight: 300,
    transition: 'transform 0.3s',
  };

  const iconOpenStyle = {
    ...iconStyle,
    transform: 'rotate(45deg)',
  };

  const answerClosedStyle = {
    maxHeight: 0,
    overflow: 'hidden',
    background: '#2d2d2d',
    transition: 'max-height 0.3s ease, padding 0.3s ease',
    padding: '0 16px',
  };

  const answerOpenStyle = {
    ...answerClosedStyle,
    maxHeight: '500px',
    padding: isMobile ? '16px' : '24px 28px',
    borderTop: '1px solid #000',
  };

  const answerTextStyle = {
    fontSize: isMobile ? '14px' : '16px',
    lineHeight: 1.6,
    color: '#d2d2d2',
  };

  // ============================================================================
  // DISPLAY / HTML ELEMENT
  // ============================================================================

  return (
    <section style={sectionStyle}>
      <h2 style={titleStyle}>Frequently Asked Questions</h2>
      
      <div style={listStyle}>
        {faqs.map((faq, index) => (
          <div key={index} style={itemStyle}>
            <button 
              style={questionBaseStyle}
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span style={openIndex === index ? iconOpenStyle : iconStyle}>
                {openIndex === index ? '×' : '+'}
              </span>
            </button>
            
            <div style={openIndex === index ? answerOpenStyle : answerClosedStyle}>
              <p style={answerTextStyle}>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
