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
      state.products.splice(action.payload, 1)
      state.quantity -=1;
  },
  }
});

export const {addProduct, removeProduct} = CartSlice.actions;
export default CartSlice.reducer;