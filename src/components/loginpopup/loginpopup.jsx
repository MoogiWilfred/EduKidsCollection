import React, { useState } from 'react'
import './loginpopup.css'
import { assets } from '../../assets/assets';

function loginpopup({setShowLogin}) {

  const[currstate, setCurrState]=useState("Sign Up")

  return (
    <div className='loginpopup-container'>

      <form action="" className='loginpopup-container-form'>
        <div className="loginpopup-title">
        <h3>{currstate}</h3>
      <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
      
      </div>
  {currstate === "Sign Up" ?   <input type="text" placeholder='Your name' required/> : <></>}
    <input  type="email"  placeholder='Your email' required/>
    <input type="password" placeholder='password' required/>
  
<button>{currstate==='Sign Up'? 'Create account' : 'Login'}</button>
<div className='condtion'>
<input type="checkbox" /> 
<p>By continuing, I agree to the terms of use & privacy policy.</p>
</div>

{currstate==="Sign Up"? (<p> Already have an account? <span className='login-span' onClick={()=>setCurrState("Login")}>Login here</span></p>):(<p> Create a new account? <span className='signUp-span' onClick={()=>setCurrState("Sign Up")}>Click here</span></p>)


}


      </form>



    </div>
  )
}

export default loginpopup