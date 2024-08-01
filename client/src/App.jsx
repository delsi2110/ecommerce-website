import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import CarPage from './pages/CarPage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (car) => {
    const existingCar = cart.find((item) => item._id === car._id);
    if (existingCar) {
      setCart(
        cart.map((item) =>
          item._id === car._id
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: (item.quantity + 1) * car.price,
              }
            : item
        )
      );
    } else {
      setCart([...cart, { ...car, quantity: 1, totalPrice: car.price }]);
    }
  };

  const updateQuantity = (carId, quantity) => {
    setCart(
      cart.map((item) =>
        item._id === carId
          ? { ...item, quantity, totalPrice: quantity * item.price }
          : item
      )
    );
  };

  const removeFromCart = (carId) => {
    setCart(cart.filter((item) => item._id !== carId));
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className='App'>
      <Navbar cartItemCount={cartItemCount} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products addToCart={addToCart} />} />
        <Route path='/car/:id' element={<CarPage addToCart={addToCart} />} />
        <Route
          path='/cart'
          element={
            <CartPage
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
