import React, { } from 'react'
import ItemCount from './ItemCount'
import './ItemListContainer.css';

function ItemListContainer(){
return(
    <div className="ItemListContainer">
    <h1>Aqui irá el catálogo <span>😻</span></h1>
    <ItemCount stock={5} initial={1}/>
    </div>
)
}

export default ItemListContainer