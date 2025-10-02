import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './Slider.css'

import { SliderProducts } from '../../data/products'
import { Navigation, Pagination } from 'swiper';
import { useCart } from '../../context/CartContext'; // 🛒 cart context
import { Link } from 'react-router-dom'; // 🛒 link to cart

const Slider = () => {
  const { dispatch } = useCart();
  const [added, setAdded] = useState(null); // track which product was added

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    setAdded(product.id); // mark as added
    setTimeout(() => setAdded(null), 3000); // reset after 3s (optional)
  };

  return (
    <div className="s-container">
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 3
          },
          0: {
            slidesPerView: 1
          }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>

              {/* 🛒 Add to Cart / Go to Cart */}
              {added === slide.id ? (
                <Link to="/cart" className="btn btn-success mt-2">
                  Go to Cart
                </Link>
              ) : (
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handleAddToCart(slide)}
                >
                  Add to Cart
                </button>
              )}
            </div>

            <img src={slide.img} alt={slide.name} className="img-p" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
