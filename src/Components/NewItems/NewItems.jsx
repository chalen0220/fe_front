import React, { useEffect, useState } from 'react'
import "./NewItems.css"
import Item from '../Item/Item';

const NewItems = () => {

  const [new_Items,setNew_Items] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:4000/newitems")
    .then((response)=>response.json())
    .then((data)=>setNew_Items(data));
  },[])

  return (
    <div className="new-collections">
      <h1>New Arrivals!</h1>
      <hr />
      <div className="collections">
        {new_Items.map((item,i)=>{
          return <Item key={i} id={item.id} title={item.title} image={item.image} price={item.price}/>
        })}
      </div>
    </div>
  )
}

export default NewItems
