import React, {useState, createContext, useContext, useEffect,} from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialState = {items: [], totalPrice:0}
const initialStateWish = {items:[]}; 

export const CartProvider = ({children}) => {

    function setLocalStorage(key, value) {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
          // catch possible errors:
          // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
        }
      }
      
      function getLocalStorage(key, initialValue) {
        try {
          const value = window.localStorage.getItem(key);
          return value ? JSON.parse(value) : initialValue;
        } catch (e) {
          // if error, return initial value
          return initialValue;
        }
      }

    const [cartInfo, setCartInfo]= useState(() => getLocalStorage("cartInfo", initialState));
    const [wishList, setWishList] = useState(initialStateWish)
     
    useEffect(() => {
        setLocalStorage("cartInfo", cartInfo);
      }, [cartInfo]);
    
    const addItem = (desc, img,  quantity, price, id, stock) =>{
        const itemIndex = cartInfo.items.findIndex(i => id === i.item.id)
        if (itemIndex !== -1){
            return( setCartInfo({ ...cartInfo, items: [ ...cartInfo.items.slice(0,itemIndex), 
                { "item": { img, id, price, stock }, "quantity":cartInfo.items[itemIndex].quantity + quantity }, 
                ...cartInfo.items.slice(itemIndex+1) ]}));
        }
        else {
            setCartInfo({ ...cartInfo, items: [ ...cartInfo.items, { "item": { img, id, price, desc, stock }, quantity } ]})
        }
        
        const newItem = [...cartInfo.items, {item: {id, price, desc, img, stock}, quantity}]
        setCartInfo({ ...cartInfo, items: newItem})

    }

    const addWishList = (desc, img, price, id) =>{
      const itemIndex = wishList.items.findIndex(i => id === i.item.id)
      if (itemIndex !== -1){
          return( setWishList({ ...wishList, items: [ ...wishList.items.slice(0,itemIndex), 
              { "item": { img, id, price } }, 
              ...wishList.items.slice(itemIndex+1) ]}));
      }
      else {
          setWishList({ ...wishList, items: [ ...wishList.items, { "item": { img, id, price, desc } } ]})
      }
      
      const newItem = [...wishList.items, {item: {id, price, desc, img}}]
      setWishList({ ...wishList, items: newItem})

  }

    console.log(wishList)
    const removeItems = (item)=>{
        const cartWithoutItem = cartInfo.items.filter ((remove) => {
        return remove.item.id !== item.id}) 
        setCartInfo({...cartInfo, items: cartWithoutItem})
     }
    

    const clear = () => {
        setCartInfo(initialState)
    }

    const totalQuantity=()=>{
        const sumaquantity = cartInfo.items.reduce((counter, item)=> (counter + item.quantity) , 0)
        return sumaquantity 
    }

    const totalPrice = () => {
        const sumaPrices = cartInfo.items.reduce((counter, item)=> (counter + item.item.price * item.quantity) , 0)
        return sumaPrices
     }



    return(
        <CartContext.Provider value={{cartInfo, addItem, removeItems, clear, totalPrice, totalQuantity, addWishList} }>{children} </CartContext.Provider>
    );
};

