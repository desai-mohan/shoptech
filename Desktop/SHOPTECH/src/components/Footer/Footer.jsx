import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div className="footer-matter child">
          <h3>TechStore</h3>
          <p>
            Your one-stop destination for the latest gadgets and tech. Quality
            products, fast delivery.
          </p>
          <div className="social-icons">
            <FaFacebook size={30} className="icon" />
            <FaInstagram size={30} className="icon" />
            <FaTwitter size={30} className="icon" />
            <FaLinkedin size={30} className="icon" />
            <FaYoutube size={30} className="icon" />
          </div>
        </div>
        <div className="child">
          <h3>Quick Links</h3>
          <div className="quick-links">
            <ul>
              <li>Home</li>
              <li>shop</li>
              <li>deals</li>
              <li>about us</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="child">
          <h3>Categories</h3>
          <div>
            <ul className="categories">
              <li>Laptops</li>
              <li>Phones</li>
              <li>Headphones</li>
              <li>TVs</li>
              <li>Accessories</li>
            </ul>
          </div>
        </div>
        <div className="child">
          <h3>News Letter</h3>
          <p>
            Subscribe to get the latest deals and offers straight to your inbox.
          </p>
          <input placeholder="enter your email...." />
          <br />
          <button>subscribe</button>
        </div>
      </div>
      <div className="payment-section">
        <div className="copyright">
          <p>© 2025 TechStore. All rights reserved.</p>
        </div>
        <div className="payments">
          <span>we accept</span>
          <button>VISA</button>
          <button>Credit</button>
          <button>Phone Pe</button>
          <button>Google pay</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
