import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import styles from "./Cart.module.css"; // ✅ import the css module

const Cart = () => {
  const { cart, dispatch } = useCart();

  // calculate total with quantity
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className={`container mt-4 ${styles.cartContainer}`}>
      <h2 className={styles.cartHeader}>🛒 Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <div className={styles.itemInfo}>
                <h6>{item.name}</h6>
                <p>{item.detail}</p>
                <span className={styles.itemPrice}>
                  ${item.price} × {item.quantity}
                </span>
              </div>
              <div className={styles.cartActions}>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", payload: item })
                  }
                >
                  +
                </button>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() =>
                    dispatch({ type: "REMOVE_ONE", payload: item.id })
                  }
                >
                  –
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() =>
                    dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className={styles.totalBox}>
            <h4>Total: ${total.toFixed(2)}</h4>
            <Link to="/checkout" className="btn btn-success">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
