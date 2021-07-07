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
const itemQuantity = cartitems.map((i)=>{return ( i)})

    return (
        <div className="container-checkOut">
         <div> 
          <div className="container-compra">
            <h1>Resumen de compra</h1>
             <div>
              <p> {totalQuantitys()} productos en el carrito </p>
            {cartitems?.map((i)=>{
                return (
                    <div key= {i.item.id} >
                    <img src= {i.item.img} alt="imagen item"></img>
                    <p> {i.item.desc} </p>
                    <p>Precio: {i.item.price} </p>
                    <p>Cantidad: {i.quantity} </p>
                    </div>
                )
            })}
             </div>
             <p>Precio total: {totalPriceItems()} </p>
         </div>
         </div>  
           <div>
            <FormUser value= {{itemProduct, itemQuantity}} ></FormUser>
           </div>
        </div>
    )
}