import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const newItem = action.payload
            // state.cartItems.push(newItem)
            const selectCartIndex = state.cartItems.findIndex(product => product.nama === newItem.nama)

            if(selectCartIndex !== -1) {
                state.cartItems[selectCartIndex].quantity += 1
                state.cartItems[selectCartIndex].totalPrice = state.cartItems[selectCartIndex].quantity * newItem.price
            } else {
                state.cartItems.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            }
        }
    }
})

export const {addItemToCart} = cartSlice.actions;

export default cartSlice;

// selector
export const selectCartItems = state => state.cart.cartItems;
export const selectCartTotalItems = state => state.cart.cartItems.reduce((total, items) => total + items.quantity, 0)