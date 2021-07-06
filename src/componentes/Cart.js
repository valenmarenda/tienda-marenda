import React from 'react';
import { useCart} from '../context/CartContext';
import CartContenido from '../componentes/CartContenido';
import './Cart.css'
import {Link} from 'react-router-dom';



export default function Cart(){

    const cartInfo = useCart()
    const cartitems = cartInfo.cartInfo.items
    

const clearProducts = () => {
    cartInfo.clear()
}

const totalPriceItems= ()=>{
return cartInfo.totalPrice() 
}



    return(
        <div> 
        <div className="container-cart">
            {cartInfo.cartInfo.items.length === 0? (
            <h1>No hay productos agregados</h1>
         ) : (
            <>
            <h1>Carrito de compras</h1>
            <div className="cart-info">
                <h2>Imagen</h2>
                <h2>Artículo</h2>
                <h2>Precio</h2>
                <h2>Cantidad</h2>
                <h2>Subtotal</h2>
            </div>
       <div className="">
        {cartitems?.map(i => {
       return (
         <CartContenido  
           item={i.item}
           quantity={i.quantity}
           >
          </CartContenido>
      )
  })} 
     </div>

     <h1 > Total $ {totalPriceItems()} </h1>
     </>
     ) };

     <div>
        <Link to= "/"><button>Continuar comprando</button></Link>
         <button  onClick={clearProducts}>Vaciar carrito de compras</button>
     </div>
     
        
     </div>
     
     <div> 
         <h2>Resumen de compras</h2>
         <p>Subtotal</p> 
         <p>$ {totalPriceItems()}</p>
         <p>Envío (retiro por sucursal)</p>
         <p>$ 0.00</p>
         <p>Total del pedido</p>
         <p>$ {totalPriceItems()}</p>
         <Link to="/cart/CheckOut">
         <button >Realizar pedido</button>
         </Link>
         
         
     </div>
     </div>
 )
}