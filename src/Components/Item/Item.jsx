import React from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      <p className="itemTitle">{props.title}</p>
        <div className="item-prices">
          ${props.price}
          {props.description}
        </div>
        </Link>
    </div>
  )
}

export default Item
