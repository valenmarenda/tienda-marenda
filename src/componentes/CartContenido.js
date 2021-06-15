import React from 'react';
import './Cart.css';
import { useCart} from '../context/CartContext';


export default function CartContenido({item, quantity}){

    const price = item.price
    const totalPriceProduct =  price * quantity; 
    const {removeItems} = useCart()

    const remover =(item)=>{
        removeItems(item)
        console.log(item)
        }

    return (
        <>
        <div className="container-cardContenido">
        <img src={item.img} alt="Imagen artículo"></img>
       <h1> {item.desc} </h1> 
       <p> <spam>$</spam> {price} </p>
       <p> {quantity} </p>
       <h1> <spam>$</spam> {totalPriceProduct} </h1>
       </div>
       <button onClick={()=>remover(item)}>Borrar</button>
       <button>Editar</button>
        </>
    )
}