import React from "react";
import "./Hero.css";
import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaStar,
  FaLaptop,
} from "react-icons/fa";
const Hero = () => {
  return (
    // <div className="hero-section">
    //   <div className="hero-content">
    //     <div className="hero-title">
    //       <span>&#x1F525; New Arrivals 2025</span>
    //     </div>
    //     <p>Discover the best products at unbeatable prices.</p>
    //   </div>
    //   <div className="hero-image">
    //     <img src="hero-image.jpg" alt="Hero" />
    //   </div>
    // </div>
    <section className="hero-section">
      <div className="hero-left">
        <span className="hero-badge">🔥 New Arrivals 2025</span>
        <h1 className="hero-title">
          Next-Gen Tech,
          <br />
          <span>Delivered Fast.</span>
        </h1>
        <p className="hero-subtitle">
          Explore the latest laptops, phones & gadgets.
          <br />
          Free shipping on orders over ₹999.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Shop Now</button>
          <button className="btn-secondary">View Deals</button>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <FaTruck /> Free Shipping
          </div>
          <div className="trust-item">
            <FaShieldAlt /> 2yr Warranty
          </div>
          <div className="trust-item">
            <FaHeadset /> 24/7 Support
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-glow-circle">
          <div className="hero-inner-circle">
            {/* <img
              src="/laptop.png"
              alt="Featured product"
              className="hero-product-img"
            /> */}
            <FaLaptop size={56} color="#fbbf24" />
            <div className="floating-price">
              <p>Starting from</p>
              <span>₹49,999</span>
            </div>
            <div className="floating-rating">
              <FaStar color="#fbbf24" /> 4.9 · 2.3k reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
