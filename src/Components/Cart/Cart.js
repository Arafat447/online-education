import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, coursePrice) => total + coursePrice.price, 0);
    const name = cart.reduce((total, coursePrice) => total + coursePrice.name +', ', " ");
    const tax = Math.round ((totalPrice*5)/100);
    return (
        <div className="cart-container">
            <h2>Order Summery </h2>
            <p>Total Purchased:{cart.length}</p>
    <p>Courses:{name}</p>
    <p><small>Tax + VAT:$ {tax}</small></p>
            <h4>Total price:$ {Math.round(totalPrice + tax)}</h4>
            <button className="fancy-button">Confirm Order</button>
        </div>
    );
};

export default Cart;