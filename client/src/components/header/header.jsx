import React from 'react'
import './header.css'
import {assets} from '../../assets/assets'

function header() {

  return (
    <div className='header-container'>
     <img className='popup-image-right 'src={assets.header_3} />
    <img className='popup-image 'src={assets.header_2} />
<div className="left">
   <img className='popup-image-left 'src={assets.header_3} />
   <div className="ads"><h1>Welcome</h1></div>
</div>
</div>

  )
}

export default header