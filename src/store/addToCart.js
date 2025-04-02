import { createSlice } from "@reduxjs/toolkit";

const addToCartSlice = createSlice({
    name: 'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addNewItem:(state,action)=>{
            state.cart = [...state.cart, action.payload]
        }
    }
})

export const {addNewItem} = addToCartSlice.actions
export default addToCartSlice.reducer

