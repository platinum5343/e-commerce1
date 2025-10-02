import { useState } from 'react'
import shopify from '../../assets/Shopfy..png'
import css from './Header.module.css'
import { CgShoppingBag } from 'react-icons/cg'
import { GoThreeBars } from 'react-icons/go'
import { Link } from 'react-router-dom' // 🛒 import Link
import { useCart } from '../../context/CartContext' // 🛒 to show item count

const Header = () => {
  const [ShowMenu, setShowMenu] = useState(true)
  const { cart } = useCart() // 🛒 get cart state

  const toggleMenu = () => {
    setShowMenu((ShowMenu) => !ShowMenu)
  }

  return (
    <div className={css.container}>
      {/* Logo */}
      <div className={css.logo}>
        <img src={shopify} alt="Shopify Logo" />
      </div>

      <div className={css.right}>
  
       

        {/* 🛒 Cart Icon with Link */}
        <Link to="/cart" className={css.cartWrapper}>
          <CgShoppingBag className={css.cart} />
          {cart.length > 0 && (
            <span className={css.cartCount}>{cart.length}</span>
          )}
        </Link>
      </div>
    </div>
  )
}

export default Header
