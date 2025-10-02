import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/Products/Products';
import Slider from './components/slider/Slider';
import Testimonials from './components/Testimonials/Testimonial';
import Virtual from './components/Virtual/Virtual';
import Footer from './components/footer/Footer';

// 🛒 Cart-related pages
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';

// 🛍️ Context for cart state
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Slider />
                <Virtual />
                <Products />
                <Testimonials />
              </>
            }
          />

          {/* Cart and checkout routes */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
