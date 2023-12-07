import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    products: [],
  },
  reducers: {

    addProduct: (state, action) => {
      state.products = action.payload
      state.quantity = state.products.length
    },
    removeProduct: (state, action) => {
      state.products.splice(action.payload, 1);
      state.quantity -= 1;
    },
    incrementQuantity: (state, action) => {
      
      state.products.map((product, index) => {
        if(index === action.payload){
          product.quantity++
        }
        return product;
      })
    },
    decrementProduct: (state, action) => {
      state.products.map((product, index) => {
        if(index === action.payload){
          if(product.quantity === 1){
            product.quantity = 1;
          }else{
            product.quantity --
          }
        }
        return product;
      })
    },
    LogoutCart:(state) =>{
      state.products = null
      state.quantity = 0
    }
  },
});

export const { addProduct, removeProduct, incrementQuantity,  decrementProduct, LogoutCart} = CartSlice.actions;
export default CartSlice.reducer;
