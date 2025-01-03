import React from 'react'
import Header from '../header/header'
import Main from '../main/main'
import Contact from '../contact/contact'
import './home.css'

function home() {
  return (
    <div className='home'>
<Header/>
<Main/>
<Contact/>
    </div>
  )
}

export default home