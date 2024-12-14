import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

function footer() {
  return (
    <div className='footer-container'>

<div className="footer-container-info">
<div className="logo-name">
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

      </div>

      
      <div className="footer-copyright">    
  <p>
        Copyright 2024 @ edukids.com - All Rights Reserved.
      </p>
      </div>
    </div>
    </div>
  )
}

export default footer