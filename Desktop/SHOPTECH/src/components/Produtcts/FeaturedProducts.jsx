import React from "react";
import ProductCard from "./ProductCard";
import "./Featuredproduct.css";
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
      image: "/macbook.png",
    },
    {
      id: 2,
      name: "iPhone 15 Pro",
      category: "Phone",
      price: 129999,
      originalPrice: 139999,
      rating: 4.9,
      reviews: 3400,
      image: "/iphone.png",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      category: "Headphones",
      price: 24999,
      originalPrice: 29999,
      rating: 4.7,
      reviews: 890,
      image: "/sony.png",
    },
    {
      id: 4,
      name: "Samsung 4K TV",
      category: "TV",
      price: 54999,
      originalPrice: 64999,
      rating: 4.6,
      reviews: 540,
      image: "/samsung.png",
    },
  ];
  return (
    <div className="featured-products">
      <h1>Our Collections's</h1>
      <div className="featured_all_button">
        <h2>Featured Products</h2>
        <button>
          View All<span>→</span>
        </button>
      </div>
      <div className="products-card">
        <ProductCard products={products} />
      </div>
    </div>
  );
};

export default FeaturedProducts;
