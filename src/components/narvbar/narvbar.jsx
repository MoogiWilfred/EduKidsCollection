import React from 'react';
import './narbar.css';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function Narvbar({ setShowLogin }) {
  
  return (
    <div className= 'narvbar-container'>
      <Link to="/">
        <div className="logo">
          <img src={assets.home_icon} alt="Home" />
        </div>
      </Link>
      <h1>
        <span className="e">E</span>
        <span className="d1">d</span>
        <span className="u">u</span>
        <span className="k">K</span>
        <span className="i">i</span>
        <span className="d">d</span>
        <span className="s">s</span>
      </h1>
      
      <div className="basket-login">
        <Link to="/cart">
          <img className="basket" src={assets.basket_icon} alt="Cart" />
        </Link>
        <button className="log-in" onClick={() => setShowLogin(true)}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Narvbar;
