import { createContext, useReducer,useContext } from "react";
import {CartReducer} from "../Reducers/cart-reducer";

export const CartContext = createContext();

const initialState = {
    data: [],
    cart: [],
    saved: [],
    quantity: 1
}

export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(CartReducer, initialState)
    return(
        <CartContext.Provider value = {{state, dispatch}}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}