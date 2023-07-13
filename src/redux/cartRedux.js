import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
        state.quantity +=1;
        state.products.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.quantity -=1;
      state.products.shift(action.payload);
  },
  }
});

export const {addProduct, removeProduct} = CartSlice.actions;
export default CartSlice.reducer;