import React from 'react'
import "./ProductDisplay.css"
import { HiShoppingCart } from 'react-icons/hi';
import { ShopContext } from '../../Context/ShopContext';
import { useContext } from 'react';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)

    function cartNotifications(){
        addToCart(product.id);
        alert("Added to Cart!");
    }
    
  return (
    <div>
        <div className="container productDisplay">
            <div className="productDisplayLeft">
                <div className="productDisplayImg">
                    <img src={product.image} alt=""/>
                </div>
            </div>
            <div className="productDisplayRight">
                <ul className="itemInfo">
                    <li className="blue"><h2>{product.title}</h2></li>
                    <li className="category">{product.cat}</li>
                    <br />
                    <li><h4>Price:${product.price}</h4></li>
                </ul>    
                <div className="pageButton">
                    <button onClick={cartNotifications}>Add to Cart<HiShoppingCart size={30} /></button>
                </div>
                <br />
                <div className="productDescription"><p>{product.description}</p></div>
            </div>
        </div>
    </div>
  )
}

export default ProductDisplay
