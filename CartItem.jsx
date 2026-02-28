import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "./CartSlice";

function CartItem({ goToProducts }) {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQty = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const decreaseQty = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const deleteItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>

              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>

              {/* Unit Total */}
              <p>
                Total: ₹{item.price * item.quantity}
              </p>

              {/* Quantity Controls */}
              <div>
                <button onClick={() => decreaseQty(item)}>
                  -
                </button>

                <button onClick={() => increaseQty(item)}>
                  +
                </button>
              </div>

              {/* Delete */}
              <button onClick={() => deleteItem(item.id)}>
                Delete
              </button>
            </div>
          ))}

          {/* Cart Total */}
          <h3>Total Cart Amount: ₹{totalAmount}</h3>
        </>
      )}

      {/* Navigation Buttons */}
      <div className="cart-actions">
        <button onClick={goToProducts}>
          Continue Shopping
        </button>

        <button onClick={() => alert("Coming Soon")}>
          Checkout
        </button>
      </div>
    </div>
  );
}

export default CartItem;
