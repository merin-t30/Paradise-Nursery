import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Check if item already exists
  const isAdded = (id) =>
    cartItems.some((item) => item.id === id);


  const plants = [
    { id: 1, name: "Snake Plant", price: 250, category: "Air Purifying", img: "https://via.placeholder.com/150" },
    { id: 2, name: "Peace Lily", price: 300, category: "Air Purifying", img: "https://via.placeholder.com/150" },
    { id: 3, name: "Areca Palm", price: 400, category: "Air Purifying", img: "https://via.placeholder.com/150" },
    { id: 4, name: "Aloe Vera", price: 200, category: "Air Purifying", img: "https://via.placeholder.com/150" },
    { id: 5, name: "Spider Plant", price: 220, category: "Air Purifying", img: "https://via.placeholder.com/150" },
    { id: 6, name: "Rubber Plant", price: 350, category: "Air Purifying", img: "https://via.placeholder.com/150" },

    { id: 7, name: "Lavender", price: 280, category: "Aromatic", img: "https://via.placeholder.com/150" },
    { id: 8, name: "Mint", price: 150, category: "Aromatic", img: "https://via.placeholder.com/150" },
    { id: 9, name: "Basil", price: 160, category: "Aromatic", img: "https://via.placeholder.com/150" },
    { id:10, name: "Rosemary", price: 300, category: "Aromatic", img: "https://via.placeholder.com/150" },
    { id:11, name: "Jasmine", price: 350, category: "Aromatic", img: "https://via.placeholder.com/150" },
    { id:12, name: "Lemongrass", price: 180, category: "Aromatic", img: "https://via.placeholder.com/150" },

    { id:13, name: "ZZ Plant", price: 450, category: "Low Maintenance", img: "https://via.placeholder.com/150" },
    { id:14, name: "Pothos", price: 200, category: "Low Maintenance", img: "https://via.placeholder.com/150" },
    { id:15, name: "Cactus", price: 180, category: "Low Maintenance", img: "https://via.placeholder.com/150" },
    { id:16, name: "Succulent", price: 170, category: "Low Maintenance", img: "https://via.placeholder.com/150" },
    { id:17, name: "Jade Plant", price: 260, category: "Low Maintenance", img: "https://via.placeholder.com/150" },
    { id:18, name: "Dracaena", price: 320, category: "Low Maintenance", img: "https://via.placeholder.com/150" },
  ];

  const categories = ["Air Purifying", "Aromatic", "Low Maintenance"];


  return (
    <div>
      {/* ---------- NAVBAR ---------- */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Plants</a>
          <span className="cart-icon">
            🛒 ({totalItems})
          </span>
        </div>
      </nav>

      {/* ---------- PRODUCTS ---------- */}
      {categories.map((category) => (
        <div key={category} className="category-section">
          <h2>{category}</h2>

          <div className="plant-grid">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} className="plant-card">
                  <img src={plant.img} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>₹{plant.price}</p>

                  <button
                    disabled={isAdded(plant.id)}
                    onClick={() => dispatch(addItem(plant))}
                  >
                    {isAdded(plant.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
