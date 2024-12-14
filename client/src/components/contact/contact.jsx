import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";


const Contact = () => {

  const[success, setSuccess]=useState(null)
 

  const ref= useRef();
const handleSubmit=e=>{
  e.preventDefault()
  emailjs
  .sendForm('service_k4kgv8u', 'template_sfvhl0b', ref.current, {
    publicKey: 'ttnq3Tb9wT5TKSA4k',
  })
  .then(
    () => {
      console.log('SUCCESS!');
      setSuccess(true)
    },
    (error) => {
      console.log('FAILED...', error.text);
      setSuccess(false)
    },
  );



}


  return (
    <div className=" contact-container">
<h1>Contact Us</h1>
<p>
Got a question, concern? Drop me a message below—We typically respond within an hour.</p>
    <div className="page-container">
      
      <div className='left'>
        <form ref={ref} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input 
            type="text"
          
            name="name"
          
           
            required
            placeholder=' Enter your name'
          />

          <label htmlFor="email">Email</label>
          <input 
            type="email"
          
            name="email"
          
            required
            placeholder='Enter your email'
          />

          <label htmlFor="message">Message</label>
          <textarea 
          
            name="message"
           
            required
            rows={5}
            placeholder="Message"
          />
          <button type="submit">Send</button>
          {success && "Your message has been received. I will get back to you soon"}
        </form>
      </div>
  
    </div>
    </div>
  );
};

export default Contact;
