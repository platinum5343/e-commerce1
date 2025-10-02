import React, { useState } from 'react';
import css from './Products.module.css';
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useCart } from "../../context/CartContext";

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
  const [activeType, setActiveType] = useState('All'); // 🔥 active filter
  const { dispatch } = useCart();

  const filter = (type) => {
    setActiveType(type);
    if (type === 'All') return setMenuProducts(ProductsData);
    setMenuProducts(ProductsData.filter((p) => p.type === type));
  };

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu} role="tablist" aria-label="Product categories">
          {['All', 'skin care', 'gadgets', 'assessories'].map((t) => (
            <li
              key={t}
              role="tab"
              aria-selected={activeType === t}
              className={activeType === t ? css.active : ''}
              onClick={() => filter(t)}
            >
              {t === 'assessories' ? 'Accessories' : (t === 'skin care' ? 'Skin Care' : (t.charAt(0).toUpperCase()+t.slice(1)))}
            </li>
          ))}
        </ul>

        <div className={css.list}>
          {MenuProducts.map((product, i) => (
            <div
              className={css.product}
              key={`${product.name}-${i}`}
              style={{ animationDelay: `${i * 60}ms` }} // 🔥 subtle stagger
            >
              <div className="left-s">
                <div className="name">
                  <span>{product.name}</span>
                  <span>{product.detail}</span>
                </div>
                <span>{product.price}$</span>
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
                >
                  Add to Cart
                </button>
              </div>

              <img src={product.img} alt={product.name} className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
