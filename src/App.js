import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Products from './components/Products/Products';
import Slider from './components/slider/Slider';
import Testimonials from './components/Testimonials/Testimonial';
import Virtual from './components/Virtual/Virtual';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
