import React from 'react';
import { useCart } from './CartContext';

const CartPage = () => {
  const { cart, updateQuantity, getTotalQuantity, getTotalAmount } = useCart();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td><img src={item.image} alt={item.title} style={{ width: '100px' }} /></td>
              <td>{item.title}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="cart-summary">
        <h2>Summary</h2>
        <p>Total Quantity: {getTotalQuantity()}</p>
        <p>Total Amount: ${getTotalAmount().toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;

