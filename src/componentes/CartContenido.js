import React from 'react';
import './Cart.css';
import { useCart} from '../context/CartContext';


export default function CartContenido({item, quantity}){

    const price = item.price
    const totalPriceProduct =  price * quantity; 
    const {removeItems} = useCart()

    const remover =(item)=>{
        removeItems(item)
        }


    return (
        <>
        {quantity === 0? (
            <h1>No hay productos agregados</h1>
        ): (
        <>
        <div className="container-cardContenido">
        <img src={item.img} alt="Imagen artículo"></img>
       <h1> {item.desc} </h1> 
       <p> $ {price} </p>
       <p> {quantity} </p>
       <h1> ${totalPriceProduct} </h1>
       </div>
       <button onClick={()=>remover(item)}>Borrar</button>
       
        </>
        )}
        </>
    )
}