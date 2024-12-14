import React, { useContext } from "react";
import "./singleItem.css";
import { assets } from '../../assets/assets';
import {StoreContex} from '../context/storecontext';

const categoryBItems = ({ id, name, price, description, image }) => {
    
  const { cartItem, addItemToCart, removeItemFromCart, url } =useContext(StoreContex);

  return (
    <div className="item">
      <div className="item-img-container">
        <img
          className="item-img"
        
          src={`${url}/images/${image}`} alt={name}/>
        
        {!cartItem[id] ? (
          <img
            className="add"
            onClick={() => addItemToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="item-counter">
            <img
              onClick={() => removeItemFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItem[id]}</p>
            <img
              onClick={() => addItemToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
        <div className="item-info">
          <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_stars} alt=""></img>
          </div>
          <p className="item-desc">{description}</p>
          <p className="item-price"> KSH.{price}</p>
        </div>
      </div>
    </div>
  );
};

export default categoryBItems;
