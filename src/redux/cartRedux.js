import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    quantity: 0,
    products: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
        state.quantity +=1;
        state.total = action.payload.price * action.payload.quantity;
        state.products.push(action.payload);
    }
  }
});

export const {addProduct} = CartSlice.actions;
export default CartSlice.reducer;