import React, {useState} from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';
import {Link} from 'react-router-dom'



export default function ItemDetail({img, title, price, desc}) {
const [eventItem, setEventItem] = useState (0);
const onAddItem = (e) => {
setEventItem(e)
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
           <ItemCount value={eventItem} onAdd={onAddItem} stock={5} initial={1}> </ItemCount> : <div className="buttons-item-detail">
            <Link to="/productDetail/card"> <button className="button-item-detail">Lo llevo</button> </Link>
             <button className="icon-item-detail"><i class="far fa-heart"></i></button>
           </div>
           }
         </div>
       </div>
      </div>
  );
}




