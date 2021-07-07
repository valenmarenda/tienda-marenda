import { useCart} from '../context/CartContext';


const CartwidgetWishList = () =>{
    const wishList = useCart()
    const wishListQuantity = wishList.wishList.items.length

    return (
        <div className="Cart-wishList">
        <p>{wishListQuantity}</p>
        </div>
    )
}

export default CartwidgetWishList;