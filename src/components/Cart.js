import React from 'react';
import { useProductContext } from '../context/ProductContext';
import { MdRemoveShoppingCart } from "react-icons/md";
import { Form, Input, Button, Checkbox } from 'antd';
import "./style/Cart.css"

const Cart = () => {
  const { cartItems, removeFromCart, quantity, setQuantity, removeAllFromCart } = useProductContext();

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const itemQuantity = quantity[item.id] || 1; // Default to 1 if quantity is not set
      return total + item.price * itemQuantity;
    }, 0);
  };

  const updateQuantity = (itemId, newQuantity) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [itemId]: newQuantity,
    }));
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
    updateQuantity(itemId, 0);
  };

  const handleRemoveAllFromCart = () => {
    if (cartItems.length === 0) {
      removeAllFromCart();
      return;
    }
    const choice = window.confirm(`Are you sure you want to remove all items from the cart?`);
    if (choice) {
      removeAllFromCart();
      setQuantity([]);
    } else {
      alert("Action canceled! Items will not be removed from the cart.");
    }
  };
  
 
  return (
    <>
      <h2>Your Cart</h2>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p className="nothingInCart">Nothing in the cart</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div>
                <p className="item-title">{item.title}</p>
                <p className="item-price">Price: ${item.price.toFixed(2)}</p>
                <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                <input
                  type="number"
                  id={`quantity-${item.id}`}
                  value={quantity[item.id] || 1}
                  min={1}
                  className="quantity-input"
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                />
                <Button onClick={() => handleRemoveFromCart(item.id)} className="" danger><MdRemoveShoppingCart /></Button>
              </div>
            </div>
          ))
        )}
      </div>
      <Button onClick={handleRemoveAllFromCart}  >remove all from cart</Button>
      <h3 className="total-price">Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
    </>
  );
};

export default Cart;
