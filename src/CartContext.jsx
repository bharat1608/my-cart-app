import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(response => response.json())
      .then(data => {
        const initialCart = data.products.map(product => ({
          ...product,
          quantity: 0
        }));
        setCart(initialCart);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const updateQuantity = (id, quantity) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      )
    );
  };

  const getTotalQuantity = () => cart.reduce((acc, item) => acc + item.quantity, 0);
  const getTotalAmount = () => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ cart, updateQuantity, getTotalQuantity, getTotalAmount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);



