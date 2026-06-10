import React from "react";
import Mainpage from "./pages/MainPage.jsx";
import Hero from "./components/Hero component/Hero.jsx";
import FeaturedProducts from "./components/Produtcts/FeaturedProducts.jsx";
import CartProvider from "./context/CartContext.jsx";
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  return (
    <div>
      <CartProvider>
        <Mainpage />
        <Hero />
        <FeaturedProducts />
        <Footer />
      </CartProvider>
    </div>
  );
};

export default App;
