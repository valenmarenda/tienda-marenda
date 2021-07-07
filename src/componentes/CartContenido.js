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
       <h2> {item.desc} </h2> 
       <h3> $ {price} </h3>
       <h3> {quantity} </h3>
       <h2> ${totalPriceProduct} </h2>
       </div>
       <button className="btn btn-second" onClick={()=>remover(item)}>Borrar producto</button>
       
        </>
        )}
        </>
    )
}