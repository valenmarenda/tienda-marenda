import React from 'react';
import { useCart} from '../context/CartContext';
import './CheckOut.css'
import FormUser from './FormUser';

export default function CheckOut (){
    const cartInfo = useCart()
    const cartitems = cartInfo.cartInfo.items


   const totalPriceItems= ()=>{
   return cartInfo.totalPrice() 
   }
 
   const totalQuantitys= ()=>{
    return cartInfo.totalQuantity() 
    }

//map de item//
const itemProduct = cartitems.map((i)=>{return (i.item)})
const stock = itemProduct.map((i)=>{return (i.stock)})

    return (
        <div className="container-checkOut">
        <div> 
        <div className="container-compra">
        <h1>Resumen de compra</h1>
        <div>
        <p> {totalQuantitys()} productos en el carrito </p>
            {cartitems?.map((i)=>{
                return (
                    <>
                    <img src= {i.item.img} alt="imagen item"></img>
                    <p> {i.item.desc} </p>
                    <p>Precio: {i.item.price} </p>
                    <p>Cantidad: {i.quantity} </p>
                    </>
                )
            })}
        </div>
        <p>Precio total: {totalPriceItems()} </p>
        </div>
        </div>  
        <div>
        <FormUser value= {{itemProduct, stock}} ></FormUser>
        </div>
        </div>
    )
}