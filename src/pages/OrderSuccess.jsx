import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./OrderSuccess.module.css"; 

function Success() {
  const location = useLocation();
  const { name, email, total } = location.state || { name: "Customer", email: "", total: 0 };

  return (
    <div className={styles.successPage}>
      <div className={styles.successCard}>
        {/* Success Icon */}
        <div className={styles.successIcon}>✅</div>

        <h1>Thank you, {name}!</h1>
        <p>Your order has been placed successfully.</p>
        {email && (
          <p>
            We’ve sent a confirmation email to <strong>{email}</strong>.
          </p>
        )}
        {total > 0 && <h3>Total Paid: ${total.toFixed(2)}</h3>}

        <Link to="/" style={{ marginTop: "2rem", display: "inline-block" }}>
          <button className={styles.homeBtn}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;
