import React, {useState} from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom'
import { useCart} from '../context/CartContext';



export default function ItemDetail({img, title, price, desc, id, stock}) {
  const [eventItem, setEventItem] = useState (0);

  const { addItem, addWishList} = useCart()

const onAddItem = (e) => {
setEventItem(e)
addItem(title, img, e, price, id, stock)
}

const handleClick =(e) => {

  addWishList(title, img, e, price, id)
}

  return (
      <div>
       <div className="container-item-detail">
         <img alt="imgProduct" src={img}></img>
         <div className="info-item-details">
           <h1>{title}</h1>
           <p> {desc} </p>
           <p className="price-detail"> <span>$</span> {price} </p>
           <p> Cantidad: </p>
           { eventItem ===0?
           <ItemCount value={eventItem} onAdd={onAddItem} stock={stock} initial={1}> </ItemCount> : <div className="buttons-item-detail">
            <Link to="/cart"> <button  className="button-item-detail">Lo llevo</button> </Link>
             
           </div>
           }
           <button className="icon-item-detail" onClick={handleClick} ><i class="far fa-heart"></i></button>
         </div>
       </div>
      </div>
  );
}




