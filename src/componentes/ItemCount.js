import React, { useState } from 'react'
import './ItemCount.css'



const ItemCount = ({ stock, initial, onAdd}) => {
 const [stockRequired, setStockRequired] = useState(initial);
 
 const onAddCount = (value) => {
     if ((stock >= stockRequired + value ) && ((stockRequired + value) >=0) ) {
     setStockRequired(stockRequired + value)
    } else{

    }
 }
 const handleClick = () => {
    onAdd(stockRequired)
}

 return (
     <div className="containerContador">
         <div className="containerItemCount">
            <button className="itemCount" onClick={() => onAddCount(-1)}><i class="fas fa-minus"></i></button> 
             <h4> {stockRequired} </h4>
             <button className="itemCount" onClick={() => onAddCount(+1)}><i class="fas fa-plus"></i></button>
         </div>  
         <button onClick={handleClick} value={stockRequired}>Agregar al carrito</button> 
     </div>
 )
}

export default ItemCount; 