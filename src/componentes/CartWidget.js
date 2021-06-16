import { useCart} from '../context/CartContext';


const Cartwidget = () => {

  const cartInfo = useCart()
  const cantidadItems = cartInfo.cartInfo.items
  const {totalQuantity}= useCart()


  const totalQuantitys= ()=>{
    return totalQuantity() 
    }


if (cartInfo.cartInfo.items.length === 0) return <h1> carrito vacío</h1>
  return (
     <>

    <button className="icon-navbar"><i className="fas fa-shopping-bag"></i>carrito <h1> {totalQuantitys()} </h1></button>
    </>
  )
};

export default Cartwidget;