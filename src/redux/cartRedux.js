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
    }
  },
});

export const { addProduct, removeProduct, incrementQuantity,  decrementProduct} = CartSlice.actions;
export default CartSlice.reducer;
