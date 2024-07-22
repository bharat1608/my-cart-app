import React from 'react';
import { CartProvider } from './CartContext';
import CartPage from './CartPage';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <CartPage />
    </CartProvider>
  );
};

export default App;

