import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';
import { assets } from '../../assets/assets';

function Main() {
  const url = 'http://localhost:4000'; // Base URL for your backend server

  const [data, setData] = useState([]);
  const [cartItem, setCartItem]=useState({})


  const addItemToCart = (itemId) => {
    setCartItem((prev) => ({
    
      ...prev,
       [itemId]: prev[itemId]?  prev[itemId] + 1 : 1,})
    
    )
  };

 const  removeItemFromCart=(itemId)=>{
    setCartItem((prev)=>{
    if (prev[itemId]>1){
      return {...prev, [itemId]: prev[itemId] -1}
    }
  else{
      const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
    }


       })

      
    
  }


  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`${url}/api/item/get`);
        setData(response.data.data);
        console.log(response.data.data); // Logs the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <div className="main-container">
      {data.map((item, index) => (
        <div key={index} className="main-item">
          {/* Image Path Construction */}
          <img
            src={`${url}/images/${item.image}`} alt={item.name}
          
          />
          <div className="remove-add">
            <div className="remove">
              <img src={assets.remove_icon_red} onClick={()=>removeItemFromCart(item._id)}/></div>
            
              <div className="add-white">

                <img src={assets.add_icon_white} onClick={()=>addItemToCart(item._id)}/>

                
                </div>
                <div className="add-green"><img src={assets.add_icon_green} onClick={()=>addItemToCart(item._id)}/>
                </div>
                <p> {cartItem[item._id]}  </p>
                </div>

          <div className="info">
            <p className="left">{item.name}</p>
            <p className="right">Ksh.{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
