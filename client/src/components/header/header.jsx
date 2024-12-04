import React from 'react'
import './header.css'
import Slider from 'react-slick'
import {header_list} from '../../assets/assets'

function header() {

  return (
    <div className='header-container'>
{header_list.map((data, index)=>(<div  key ={index} className='header-item' >
    <img className='popup-image '   src={data.image} />

</div> ))}

    </div>
  )
}

export default header