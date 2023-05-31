import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform subscription logic with the email value
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>About</h3>
          <p>Deloitte provides industry-leading audit, consulting, tax, and advisory services to many of the world's most admired brands.</p>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Consulting</li>
            <li>Audit & Assurance</li>
            <li>Tax</li>
            <li>Advisory</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect with us</h3>
          <ul className="social-icons">
            <li><a href="https://twitter.com/aysdev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.linkedin.com/in/aysdev" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Subscribe to our Newsletter</h3>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Your email" value={email} onChange={handleEmailChange} required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
