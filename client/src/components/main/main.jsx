import React, { useEffect, useState } from 'react';
import './main.css';
import axios from 'axios';

function Main() {
  const url = 'http://localhost:4000'; // Base URL for your backend server

  const [data, setData] = useState([]);

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
            src={`${url}/${item.image.replace(/\\/g, '/')}`}
            alt={item.name}
          />
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
