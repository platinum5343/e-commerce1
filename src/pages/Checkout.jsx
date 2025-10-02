import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css"; // ✅ css module

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const order = {
      customer: form,
      items: cart,
      total,
      date: new Date().toISOString(),
    };

    console.log("✅ Order placed:", order);

    dispatch({ type: "CLEAR_CART" });

    navigate("/order-success", { state: { order } });
  };

  return (
    <div className={`container mt-4 ${styles.checkoutContainer}`}>
      <h2 className={styles.checkoutHeader}>Checkout</h2>

      <div className="row">
        {/* Checkout Form */}
        <div className="col-md-6 mb-4">
          <div className={styles.formCard}>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label>Address</label>
                <textarea
                  rows="3"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  required
                />
              </div>

              {/* ✅ Professional button placement */}
              <div className={styles.formFooter}>
                <button type="submit" className={styles.submitBtn}>
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="col-md-6">
          <div className={styles.orderSummary}>
            <h4>Order Summary</h4>
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <div>
                    {item.name} × {item.quantity}
                  </div>
                  <span>${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className={styles.total}>Total: ${total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
