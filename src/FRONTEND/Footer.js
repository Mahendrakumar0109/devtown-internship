import React from 'react';
import './Footer.css'; // 
const Footer = () => {
  return (
    <div>
      <footer className="amazon-footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email: contact@DevTown.com</p>
          <p>Phone: +1 800-123-4567</p>
        </div>

        <div className="footer-column">
          <h4>Address</h4>
          <p>Hyderabad, Bangolare, Chennai</p>
          <p>Seattle, WA 98101</p>
        </div>

        <div className="footer-column">
          <h4>About Us</h4>
          <p>We're passionate about making your online shopping experience as enjoyable as possible.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;
