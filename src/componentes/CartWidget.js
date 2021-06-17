import { useCart} from '../context/CartContext';
import {Link} from 'react-router-dom'

const Cartwidget = () => {

  const cartInfo = useCart()
  const {totalQuantity}= useCart()


  const totalQuantitys= ()=>{
    return totalQuantity() 
    }


if (cartInfo.cartInfo.items.length === 0) return <h1> carrito vacío</h1>
  return (
     <>
     <Link to="/cart">
    <button className="icon-navbar"><i className="fas fa-shopping-bag"></i>carrito <p> {totalQuantitys()} </p></button>
    </Link>
    </>
  )
};

export default Cartwidget;