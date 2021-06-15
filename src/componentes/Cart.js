import React from 'react';
import { useCart} from '../context/CartContext';
import CartContenido from '../componentes/CartContenido';
import './Cart.css'

export default function Cart(){
  //  const [card, setCard]= useState(0)
    const cartInfo = useCart()
    const {clear} = useCart()

    const cartitems = cartInfo.cartInfo.items

const clearProducts = () => {
    clear()
}





    return(
        <div className="container-cart">
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
           <>
         <CartContenido
           item={i.item}
           quantity={i.quantity}

           >
          </CartContenido>
          
          </>
      )
      
  })} 

     </div>

     <div>
         <button >Continuar comprando</button>
         <button  onClick={clearProducts}>Vaciar carrito de compras</button>
     </div>
     </div>
 )
}