import React, {useState, createContext, useContext} from 'react';

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const initialState = {items: [], totalPrice:0}

export const CartProvider = ({children}) => {
    const [cartInfo, setCartInfo]= useState(initialState);

    const addItem = (desc, img,  quantity, price, id) =>{
        const itemIndex = cartInfo.items.findIndex(i => id === i.item.id)
        if (itemIndex !== -1){
            return( setCartInfo({ ...cartInfo, items: [ ...cartInfo.items.slice(0,itemIndex), 
                { "item": { img, id, price }, "quantity":cartInfo.items[itemIndex].quantity + quantity }, 
                ...cartInfo.items.slice(itemIndex+1) ]}));
        }
        else {
            setCartInfo({ ...cartInfo, items: [ ...cartInfo.items, { "item": { img, id, price }, quantity } ]})
        }
        
        const newItem = [...cartInfo.items, {item: {id, price, desc, img}, quantity}]
        setCartInfo({ ...cartInfo, items: newItem})

    }
    const removeItem = ()=>{

    }
    const clear = () => {
        setCartInfo(initialState)
    }
    console.log(cartInfo)
    
    return(
        <CartContext.Provider value={{cartInfo, addItem, removeItem, clear}}>{children} </CartContext.Provider>
    );
};

