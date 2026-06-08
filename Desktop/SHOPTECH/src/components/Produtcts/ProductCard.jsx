import React from "react";
import "./productCard.css";
import { FaShoppingCart } from "react-icons/fa";
import { FormData } from "../../utils/FormData";
const ProductCard = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => {
        return (
          <div className="each-product">
            <img src={product.image} alt="fall" />
            <p>{product.category}</p>

            <p>{product.name}</p>
            <div className="rat-rev">
              <span className="rating">{product.rating}</span>
              <span>({FormData(product.reviews)})</span>
            </div>
            <div className="price">
              <p>{product.price}</p>
              <p>
                <del className="original">{product.originalPrice}</del>
              </p>
            </div>
            <div>
              <FaShoppingCart />
              <button>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
