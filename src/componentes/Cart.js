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
        <> 
        <div className="container-cart">
            
            {cartInfo.cartInfo.items.length === 0? (
            <h1>No hay productos agregados</h1>
         ) : (
            <>
            
            <h1>Carrito de compras</h1>
            <div className="container-contenidoCarrito">
            <div>
            <div className="cart-info">
                <h2>Producto</h2>
                <h2>Artículo</h2>
                <h2>Precio</h2>
                <h2>Cantidad</h2>
                <h2>Subtotal</h2>
            </div>
       
        {cartitems?.map(i => {
       return (
         <CartContenido  
           item={i.item}
           quantity={i.quantity}
           key={i.item.id}
           >
          </CartContenido>
      )
  })} 
     
     <div className="total-price">
     <h2><span> Total $ </span>{totalPriceItems()} </h2>
     </div>
     

     <div className="btns-carrito">
        <Link to= "/"><button className=" btn btn-carrito">Continuar comprando</button></Link>
         <button className=" btn btn-carrito"   onClick={clearProducts}>Vaciar carrito </button>
     </div>
     
     </div>
     
     
     <div className="container-resumenCompra"> 
         
         <h1>Resumen de compra</h1>
         <div className="item-resumenCompra">
         <h3>Subtotal</h3> 
         <p>$ {totalPriceItems()}</p>
         </div>
         <div className="item-resumenCompra">
         <h3>Envío (retiro por sucursal)</h3>
         <p>$ 0.00</p>
         </div>
         <div className="item-resumenCompra">
         <h3>Total del pedido</h3>
         <p className="item">$ {totalPriceItems()}</p>
         </div>
         <Link to="/cart/CheckOut">
         <button className="btn btn-important" >Realizar pedido</button>
         </Link>
         
         
     </div>
     </div>
     </>
) }

     </div>
     </>
 )
}