import { createContext, useContext, useReducer } from "react";
const CartContext = createContext()

export const CartProvider = ({children}) =>{
    const initialState = {
        cartItem: []
    }

    const cartReducer = (state, action)=>{
        switch(action.type){
            case 'ADD_TO_CART':
                return{
                    ...state,
                    cartItem: [...state.cartItem, action.payload]
                }
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(cartReducer, initialState)

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = ()=>{
    return useContext(CartContext)
}
