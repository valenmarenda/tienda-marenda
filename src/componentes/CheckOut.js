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
             
              <p><span>{totalQuantitys()}</span>  productos en el carrito </p>
              <div className="container-ItemsCompra" >
            {cartitems?.map((i)=>{
                return (
                    <div className="container-itemCompra" key= {i.item.id} >
                    <img src= {i.item.img} alt="imagen item"></img>
                    <h3> {i.item.desc} </h3>
                    <p>Precio: ${i.item.price} </p>
                    <p>Cantidad: {i.quantity} </p>
                    </div>
                )
            })}
             </div>
             <p>Precio total:$ <span> {totalPriceItems()} </span></p>
         </div>
         </div>  
           <div className="container-formUser">
            <FormUser value= {{itemProduct, itemQuantity}} ></FormUser>
           </div>
        </div>
    )
}