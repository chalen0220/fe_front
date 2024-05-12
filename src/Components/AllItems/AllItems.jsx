import React from 'react'
import "./AllItems.css"
import data_product from '../Assets/all_products/data';
import Item from '../Item/Item';

const AllItems = () => {
  return (
    <div className="all-items">
      <div className="all-products">
        {data_product.map((item,i)=>{
          return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default AllItems
