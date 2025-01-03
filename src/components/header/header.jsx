import React from 'react'
import './header.css'
import {assets} from '../../assets/assets'

function header() {

  return (
    <div className='header-container'>
   <div className='popup-left' > 
    <div className='new-shops'>
    <h4>We are Now Near You</h4> 
    <ul>
      <li>Kisii: Kisii Plaza</li>
      <li>Eldoret: The 254 Building</li>
      <li>Kisumu: Kisumumatt</li>
      <li>Nairobi: Nairobi GatewayMall</li>
      <li>Kakamega:Kakamega Plaza</li>
      <li>Muranga: The Readers' Building</li>
      
    </ul>
    </div>
    <div className='advert'>
<p className="text-advert">
  Free Delivery&nbsp;
  <span >
    <span>WithinCBD</span>
    <span>YourFirstOrder</span>
    <span>OrderAboveKsh.10,000</span>
  </span>
</p>

  </div>
    </div>
   <img className='popup-image 'src={assets.header_2} />

<div className='popup-right' >
<div className='popup-image-right' ></div>

<div className='contact'>
<h1>CALL US NOW:</h1> 
<p>+254 778 188 922</p>

  </div>
  </div>
</div>

  )
}

export default header