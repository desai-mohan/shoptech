import React from "react";
import Mainpage from "./pages/MainPage.jsx";
import Hero from "./components/Hero component/Hero.jsx";
import FeaturedProducts from "./components/Produtcts/FeaturedProducts.jsx";

const App = () => {
  return (
    <div>
      <Mainpage />
      <Hero />
      <FeaturedProducts />
    </div>
  );
};

export default App;
