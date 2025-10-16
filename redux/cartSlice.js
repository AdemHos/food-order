import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProducts : (state,actiom) => {
            state.products.push(actiom.payload);
            state.quantity += actiom.payload.quantity;
            state.total += actiom.payload.price

        },
        reset: (state,action) => {
            state.products = [],
            state.total = 0,
            state.quantity = 0
        }
    }
})




export const {addProducts,reset} = cartSlice.actions
export default cartSlice.reducer