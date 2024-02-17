import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../Counterslice'
import cartSlice from "../cartSlice";
export const store = configureStore({
    reducer:{
       counter:counterSlice,
       cart:cartSlice  
    }
})