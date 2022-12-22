import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/heroImg.png'
import { RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
const Hero = () => {
  return (
   
    <div className={css.container}>
      
      <div className={css.h_sides}>
        <span className={css.text1}>Get your desired Product</span>
        <div className={css.text2}>
          <span>Trending Collections</span>
        <span> 
          {" "}
        Online shopping is the best way of getting your desired product in the 21st century
        </span>
        </div>
      </div>
   

    <div className={css.wrapper}>
      <div className={css.blueCircle}></div>
      <img src={HeroImg} alt="" width={600}/>
      <div className={css.cart2}>
        <RiShoppingBagFill />

        <div className={css.signup}>
          <span>Best Signup Offers</span>

          <div>
            <BsArrowRight />
          </div>
        </div>
      </div>
    </div>

    <div className={css.h_sides}>
      <div className={css.traffic}>
        <span>1.5m</span>
        <span>MOnthly Traffic</span>
      </div>

      <div className={css.customers}>
        <span>100k</span>
        <span>Happy Customers</span>
      </div>
    </div>

 
    </div>
  )
}

export default Hero