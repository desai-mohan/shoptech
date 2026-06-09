import React from "react";
import ProductCard from "./ProductCard";
import "./Featuredproduct.css";
import { FaLaptop, FaMobileAlt, FaHeadphones, FaTv } from "react-icons/fa";
const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "MacBook Air M2",
      category: "Laptop",
      price: 89999,
      originalPrice: 99999,
      rating: 4.8,
      reviews: 1200,
      image: <FaLaptop />,
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      category: "Phone",
      price: 129999,
      originalPrice: 139999,
      rating: 4.9,
      reviews: 3400,
      image: <FaMobileAlt />,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 24999,
      originalPrice: 29999,
      rating: 4.7,
      reviews: 8900,
      image: <FaHeadphones />,
    },
    {
      id: 4,
      name: "Samsung 4K TV",
      category: "TV",
      price: 54999,
      originalPrice: 64999,
      rating: 4.6,
      reviews: 540,
      image: <FaTv />,
    },
  ];
  return (
    <section className="featured-products">
      <h1>Our Collections's</h1>
      <div className="featured_all_button">
        <h2>Featured Products</h2>
        <button>
          View All<span>→</span>
        </button>
      </div>
      <div className="products">
        <div>
          <button>All</button>
        </div>
        <div>
          <button>Phones</button>
        </div>
        <div>
          <button>Laptops</button>
        </div>
        <div>
          <button>HeadPhones</button>
        </div>
        <div>
          <button>TVs</button>t
        </div>
      </div>

      <div className="products-card">
        <ProductCard products={products} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
