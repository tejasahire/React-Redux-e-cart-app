import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalPrice:0,

    },
    reducers:{
        addTocart:(state,action)=>{
            const newItem = action.payload
            state.items.push(newItem)
            state.totalPrice += newItem.price
        },
        clearCart:(state)=>{
            state.items = [],
            state.totalPrice = 0
        }
    }
})

export const selectCartitems = (state) =>state.cart.items

export const selectCarttotalprice = (state) =>state.cart.totalPrice
export const  {addTocart,clearCart} = cartSlice.actions

export default cartSlice.reducer
