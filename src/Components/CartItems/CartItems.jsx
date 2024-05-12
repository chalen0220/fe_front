import React, { useContext } from 'react'
import "./CartItems.css"
import { ShopContext } from '../../Context/ShopContext';
import { LuTrash } from "react-icons/lu";

const CartItems = () => {
  const {shippingPrice, totalCartAmount, all_products, cartItems, removeFromCart} = useContext(ShopContext);

  function buttonIDCart() {
    alert('Thank you for shopping at Fluff Emporium! This button is for demo only.');
  }

  return (
    <div className="cartItems">
        <h1 className="cart">Cart</h1>
      <div className="cartItemsFormatMain">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
       {all_products.map((item)=>{
            if(cartItems[item.id] > 0) {
                return <div>
                <div className="cartItemsFormat">
                    <img src={item.image} alt="" className="cartIcon-ProductIcon" />
                    <p>{item.title}</p>
                    <p>${item.price}</p>
                    <p className="cartItemsQuantity">{cartItems[item.id]}</p>
                    <p>${item.price * cartItems[item.id]}</p>
                    <div className="trash" onClick={()=>{removeFromCart(item.id)}}><LuTrash /></div>
                </div>
                <hr />
                </div> 
            }
            return null;
       })} 
       <div className="cartItemsBottom">
            <div className="cartItemsTotal">
                <div className="cartItemsTotalItems">
                    <p>Subtotal: ${totalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartItemsTotalItems">
                    <p>Shipping Fee:{shippingPrice() === " FREE"? " FREE" : " $15"}</p>
                </div>
                <hr />
                <div className="cartItemsTotalItems">
                    <h2>Total: ${shippingPrice() === " FREE"? totalCartAmount() : (totalCartAmount() + 15)}</h2>
                </div>
                <br />
                <button onClick={buttonIDCart}>Checkout</button>
            </div>

       </div>
    </div>
  )
}

export default CartItems
