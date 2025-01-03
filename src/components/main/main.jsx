import React, { useContext} from 'react';
import './main.css';
import {StoreContex} from '../context/storecontext';
import CategoryA from '../itemCategory/categoryAItems';
import CategoryB from '../itemCategory/categoryBItems';




function Main() {
const {listitem,categoryAItems, categoryBItems,}= useContext(StoreContex)


  
return (
  <div className="food-display" id="food-display">
  <div className="category-a">
   <div className="category"><p>New Arrivals | Live Now</p></div>
    <div className="food-display-list">
     
      {categoryAItems.map((item, index) => {
       
          return (
            < CategoryA
              key={item._id} 
              id={item._id} 
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}

            />
          );
        
      })}
    </div>
    </div>

    <div className="category-b">
    <div className="category"><p>Flash Sales | Live Now</p></div>
    <div className="food-display-list">
     
      {categoryBItems.map((item, index) => {
       
          return (
            < CategoryB
              key={item._id} 
              id={item._id} 
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}

            />
          );
        
      })}
    </div>
</div>


    <div className="daily-finds">
    <div className="category"><p>Daily Finds </p></div>
    <div className="food-display-list">
     
      {listitem.map((item, index) => {
       
          return (
            < CategoryB
              key={item._id} 
              id={item._id} 
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}

            />
          );
        
      })}
    </div>
    </div>

  </div>
);
};

export default Main;
