import { useCart} from '../context/CartContext';
import {Link} from 'react-router-dom';
import './AcordionNavBar.css';

const Cartwidget = () => {

  const cartInfo = useCart()
  const {totalQuantity}= useCart()


  const totalQuantitys= ()=>{
    return totalQuantity() 
    }


if (cartInfo.cartInfo.items.length === 0) return <h1> </h1>
  return (
     <>
     <Link to="/cart">
     <p> {totalQuantitys()} </p>
    </Link>
    </>
  )
};

export default Cartwidget;