import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-links">
        <h3>&nbsp;&nbsp;&nbsp;Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Email: support@safeyourweb.in</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-social">
        <h3>&nbsp;&nbsp;&nbsp;Follow Us</h3>
        <ul className="social-media-icons">
          <li><a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="Facebook" /></a></li>
          <li><a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png" alt="Twitter" /></a></li>
          <li><a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" alt="LinkedIn" /></a></li>
        </ul>
      </div>
      <div className="newsletter">
        <h3>Subscribe to our newsletter</h3>
        <p>Monthly digest of what's new and exciting from us.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Email address" required />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 SafeYourWeb. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
