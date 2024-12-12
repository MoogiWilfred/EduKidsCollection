import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const StoreContex = createContext();

function StoreContextProvider(props) {
  const url = "https://edukidscollection.onrender.com";

  const [listitem, setListItem] = useState([]); // Ensure it's initialized as an array
  const [cartItem, setCartItem] = useState({});

  // Fetch data from backend
  useEffect(() => {
    const fetchListItem = async () => {
      try {
        const response = await axios.get(url + "/api/item/get");
        console.log('API Response:', response.data.data);
        const items = Array.isArray(response.data.data) ? response.data.data : [];
        setListItem(items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchListItem();
  }, []);

  // Filter items by category
  const categoryAItems = Array.isArray(listitem)
    ? listitem.filter(item => item.category === "A")
    : [];
  const categoryBItems = Array.isArray(listitem)
    ? listitem.filter(item => item.category === "B")
    : [];

  // Cart logic
  const addItemToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));
  };

  const removeItemFromCart = (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const updatedCart = { ...prev };
        delete updatedCart[itemId];
        return updatedCart;
      }
    });
  };

  // Context values
  const ContextValue = {
    url,
    listitem,
    cartItem,
    addItemToCart,
    removeItemFromCart,
    categoryAItems,
    categoryBItems,
  };

  return (
    <StoreContex.Provider value={ContextValue}>
      {props.children}
    </StoreContex.Provider>
  );
}

export default StoreContextProvider;
