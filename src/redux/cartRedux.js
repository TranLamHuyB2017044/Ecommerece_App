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
    }
  }
});

export const {addProduct} = CartSlice.actions;
export default CartSlice.reducer;