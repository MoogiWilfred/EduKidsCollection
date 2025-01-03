import React from 'react'
import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'

import Home from './components/home/home'
import Cart from './components/cart/cart'
import NarBar from "./components/narvbar/narvbar"
import Footer from "./components/footer/footer"
import LoginPopup from './components/loginpopup/loginpopup'
import NotificationBar from './components/NotificationBar/NotificationBar';




function App() {

  const [showLogin, setShowLogin]=useState(false)


  return ( 
    <div>
{showLogin? <LoginPopup setShowLogin={setShowLogin}/> : <></>}
<NotificationBar/>
<NarBar setShowLogin={setShowLogin}/>
     
<Routes>
       <Route path='/' element={<Home/>}/>
     <Route path='/cart' element={<Cart/>}/>

      </Routes>
     <Footer/>
    </div>
  )
}

export default App