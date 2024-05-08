import React from 'react';
import './Footer.css';

const Footer = () => {
  const links = Array.from({ length: 20 }, (_, i) => `Link${i + 1}`);

  // Function to chunk the links array into groups of 5
  const chunkArray = (arr, size) => {
    return arr.reduce((chunks, el, i) => {
      if (i % size === 0) {
        chunks.push([el]);
      } else {
        chunks[chunks.length - 1].push(el);
      }
      return chunks;
    }, []);
  };

  const linkChunks = chunkArray(links, 5);

  return (
    <footer className="footer-container" style={{ backgroundColor: '#1c4980' }}>
      <div className="footer-content">
        <div className="footer-section form-section" style={{ flex: '0 0 20%', textAlign: 'left' }}>
          <h4 className="footer-subheading">Contact Details</h4>
          <p>Email: example@example.com</p>
          <p>Phone: +1234567890</p>
          <br />
          <h4 className="footer-subheading">Subscribe for Latest Updates</h4>
          <form className="footer-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="footer-form-input"
            />
            <input
              type="email"
              placeholder="Confirm your email"
              className="footer-form-input"
            />
            <button type="submit" className="footer-form-btn">
              Subscribe
            </button>
          </form>
        </div>
        <div className="footer-section" style={{ flex: '0 0 80%' }}>
          <h3 className="footer-heading">EasyGrad</h3>
          <div className="footer-links">
            {linkChunks.map((column, columnIndex) => (
              <div key={columnIndex} className="footer-column">
                <h4 className="footer-subheading">Section {columnIndex + 1}</h4>
                {column.map((link, linkIndex) => (
                  <div key={linkIndex} className="footer-link-item">
                    <a href="#">{link}</a>
                  </div>
                ))}
                {columnIndex !== linkChunks.length - 1 && <div className="footer-divider"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-trademark">© EasyGrad. Created by Nimish Dureja.</div>
    </footer>
  );
}

export default Footer;
