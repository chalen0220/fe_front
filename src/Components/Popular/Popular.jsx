import React from 'react';
import "./Popular.css";
import data_product from "../Assets/all_products/data";
import Item from "../Item/Item"
import { LuBellRing } from "react-icons/lu";




const Popular = () => {
  const saleItems = data_product.filter((currentElement) => currentElement.popular === true);
  return (
    <div className="popular">
      <h1><LuBellRing /> Popular Items! </h1>
      <hr/>
        <div className="popular-item">
          {saleItems.map((item,i)=>{
            return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price}/>
         })}
        </div>
    </div>
  )
}

export default Popular
