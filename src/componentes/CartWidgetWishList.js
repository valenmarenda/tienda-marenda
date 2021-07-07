import { useCart} from '../context/CartContext';
import './AcordionNavBar.css';

const CartwidgetWishList = () =>{
    const wishList = useCart()
    const wishListQuantity = wishList.wishList.items.length

    return (
        
        <p>{wishListQuantity}</p>
    )
}

export default CartwidgetWishList;