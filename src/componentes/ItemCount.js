import React, { useState } from 'react'
import './ItemCount.css'



const ItemCount = ({ stock, initial}) => {
 const [stockRequired, setStockRequired] = useState(initial);
 
 const onAdd = (value) => {
     if ((stock >= stockRequired + value ) && ((stockRequired + value) >=0) ) {
     setStockRequired(stockRequired + value)
    } else{

    }
 }

 
 
 return (
     <div className="containerContador">
         <h1>Contador de productos</h1>
         <div className="containerItemCount">
            <button className="itemCount" onClick={() => onAdd(-1)}><i class="fas fa-minus"></i></button> 
             <h4> {stockRequired} </h4>
             <button className="itemCount" onClick={() => onAdd(+1)}><i class="fas fa-plus"></i></button>
         </div>   
     </div>
 )
}

export default ItemCount; 