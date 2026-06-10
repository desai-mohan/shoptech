import React, { useContext, useState } from "react";
import "./productCard.css";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { formatNumber } from "../../utils/formatNumber";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ products }) => {
  const [wishlisted, setWishlisted] = useState({});
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const toggleWishlist = (id) => {
    setWishlisted((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="product-grid">
      {products.map((product) => {
        const discount = Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) *
            100,
        );

        // ✅ isInCart must be INSIDE the map
        const isInCart = cart.some((item) => item.id === product.id);

        return (
          <div className="each-product" key={product.id}>
            {/* Discount Badge */}
            <div className="discount-badge">-{discount}%</div>

            {/* ✅ Wishlist button properly placed */}
            <button
              className="wishlist-btn"
              onClick={() => toggleWishlist(product.id)}
            >
              <FaHeart color={wishlisted[product.id] ? "#ef4444" : "#6b7280"} />
            </button>

            {/* Icon/Image */}
            <div className="product-icon">{product.image}</div>

            <p className="product-category">{product.category}</p>
            <p className="product-name">{product.name}</p>

            {/* Rating */}
            <div className="rat-rev">
              <span className="rating">⭐ {product.rating}</span>
              <span>({formatNumber(product.reviews)})</span>
            </div>

            {/* Price */}
            <div className="price">
              <p className="current-price">
                ₹{product.price.toLocaleString("en-IN")}
              </p>
              <p>
                <del className="original">
                  ₹{product.originalPrice.toLocaleString("en-IN")}
                </del>
              </p>
            </div>

            {/* ✅ Add to Cart — passing full product object */}
            <div className="add_to_cart">
              <FaShoppingCart />
              <button
                onClick={() =>
                  isInCart ? removeFromCart(product.id) : addToCart(product)
                }
              >
                {isInCart ? "Remove from Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
