// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   return (
//     <CartContext.Provider value={{ cart, setCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;
import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add or increase quantity
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Remove completely
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Increase quantity
  const increaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  // Decrease quantity
  const decreaseQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  // Total price
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
