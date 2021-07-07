import { useCart} from '../context/CartContext';


const CartwidgetWishList = () =>{
    const wishList = useCart()
    const wishListQuantity = wishList.wishList.items.length

    return (
        <div className="Cart-wishList">
        {wishListQuantity ===0? <p></p>:
        <p>{wishListQuantity}</p>
         }
        </div>
    )
}

export default CartwidgetWishList;