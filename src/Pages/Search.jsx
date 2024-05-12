import React from 'react'
import data_product from '../Components/Assets/all_products/data';
import Item from '../Components/Item/Item';
import { CgSearchFound } from 'react-icons/cg';
import  '../App.css';

const Search = () => {
  function getCurrentURL () {
    return window.location.href
  }
  const url = getCurrentURL().split("=");
  const sResults = data_product.filter((currentElement) => currentElement.tags.includes(`${url[1].toLowerCase()}`));
  return (
    <div className="seasonal">
      <div className="sContainer">           
          <h4 className="sLabel"><CgSearchFound/>Search Results for {url[1]}</h4>           
          <div className="sItems"> 
            {sResults.map((item,i)=>{
              return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price}/>
            })}
          </div>
      </div>
    </div>
  )
}

export default Search
