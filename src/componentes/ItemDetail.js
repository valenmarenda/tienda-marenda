
import { Icon } from '@material-ui/core';
import React from 'react';
import ItemCount from './ItemCount';
import './ItemDetail.css';





export default function ItemDetail({img, title, price, desc}) {


  return (


      <div className="container-item-detail">

      <img src={img}></img>
      <div className="info-item-details">
      <h1>{title}</h1>
      <p> {desc} </p>
      <p className="price-detail">{price} </p>
      <p> Cantidad: </p>
      <ItemCount stock={5} initial={1}/>
      <div className="buttons-item-detail">
      <button className="button-item-detail">Lo llevo</button> 
      <button className="icon-item-detail"><i class="far fa-heart"></i></button>
      </div>
      </div>
      </div>

  );
}




