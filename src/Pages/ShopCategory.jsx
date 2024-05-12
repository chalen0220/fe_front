import React, { useContext } from 'react'
import  '../App.css';
import {ShopContext} from "../Context/ShopContext"
import Item from "../Components/Item/Item";

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);  
  const catItems = all_products.filter(items => props.cat === items.cat)
  return (
    <div className="shopCat">
        <div className="sContainer">
            <div class="sLabel">
                {    
                catItems[0].cat      
                }
            </div>
            <div className="sItems">
            {all_products.map((item,i)=>{
                if (props.cat === item.cat){
                    return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price}/>
                }
                else {
                    return null;
                }
             })}   
            </div>
        </div>
    </div>
  )
}

export default ShopCategory
