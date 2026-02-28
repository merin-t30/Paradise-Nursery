import React, { useState } from "react";
import "./App.css";
import ProductList from "./ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  const handleGetStarted = () => {
    setShowProducts(true);
  };

  return (
    <div className="app-container">
      {!showProducts ? (
        <div className="landing-container">
          <h1>Paradise Nursery</h1>
          <p className="tagline">
            Bringing fresh, air-purifying plants to brighten your home and
            refresh your life.
          </p>
          <button className="start-btn" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
