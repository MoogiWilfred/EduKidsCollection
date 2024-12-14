import React from 'react'

import './NotificationBar.css'

function NotificationBar() {
  return (
    <div className='notification-bar'>
    <div className="edukids">
    <h1>
        <span className="e">E</span>
        <span className="d1">d</span>
        <span className="u">u</span>
        <span className="k">K</span>
        <span className="i">i</span>
        <span className="d">d</span>
        <span className="s">s</span> 
        
      </h1> 

{/*<div class="notification">
  <div class="popup-message">💥 Get 20% off on your first order! Use code: FIRST20</div>
  <div class="popup-message">🚚 Free shipping on orders over $50!</div>
  <div class="popup-message">🎉 New arrivals are here! Check them out!</div>
</div>*/}

<div className="bm-pl">
    
	<div className="bm-pl__blob bm-pl__blob--r"></div>
	<div className="bm-pl__blob bm-pl__blob--g"></div>
	<div className="bm-pl__blob bm-pl__blob--b"></div>

</div>

     </div>

     <div className="info"><p> <span className='your'>Your</span><span className='one'> One </span> <span className='stop'> Stop</span>  <span className='shop'> Shop</span> <span className='for'> For</span><span className='kids'> Kids'</span><span className='stationery'> Stationery</span></p></div>
 </div>
  )
}

export default NotificationBar