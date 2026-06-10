import React, { useContext } from "react";
import "./Header.css";
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
const Header = () => {
  // Example cart count, you can replace it with dynamic data
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="nav-logo">TechStore</div>

      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/shop">Shop</a>
        </li>
        <li>
          <a href="/categories">Categories</a>
        </li>
        <li>
          <a href="/deals">Deals</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>

      <div className="nav-actions">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            className="search-input"
          />
          <FaSearch className="search-button" />
        </div>
        {/* <FaHeart className="icon" /> */}
        <div className="cart-wrapper">
          <FaShoppingCart className="icon" />
          <span className="badge">{cart.length}</span>
        </div>
        <FaUser className="icon" title="User" />
      </div>
    </nav>
  );
};

export default Header;
