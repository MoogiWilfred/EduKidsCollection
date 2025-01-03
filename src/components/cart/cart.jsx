import React, { useContext } from "react";
import "./cart.css";
import {StoreContex} from '../context/storecontext';


const Cart = () => {
  const { listitem, cartItem, removeItemFromCart, url } =useContext(StoreContex);

  

  return (
    <div>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {listitem.map((item, index) => {
            if (cartItem[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img
                           src={`${url}/images/${item.image}`} alt={item.name}
                    />
                    <p>{item.name}</p>
                    <p>KSH. {item.price}</p>
                    <p>{cartItem[item._id]}</p>
                    <p>KSH. {item.price * cartItem[item._id]}</p>
                    <p
                      onClick={() => removeItemFromCart(item._id)}
                      className="cross"
                    >
                      X
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>KSH. </p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>KSH.100 </p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>

                <b>
                  KSH.
               
                </b>
              </div>
            </div>
            <button >
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="cart-promocode">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
