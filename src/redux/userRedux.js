import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    newUser: null,
  },
  reducers: {
    Login: (state, action) => {
      state.currentUser = action.payload;
    },

    Logout: (state) =>{
      state.currentUser = null;
    },
    SignUp: (state, action) =>{
      state.newUser = action.payload;
    }
    
  }
});

export const { Login, Logout, SignUp} = UserSlice.actions;
export default UserSlice.reducer;