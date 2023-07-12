import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    error: false,
    newUser: null,
  },
  reducers: {
    Login: (state, action) => {
      state.currentUser = action.payload;
    },
    Failure: (state) => {
      state.error = true;
    },
    Logout: (state) =>{
      state.currentUser = null;
    },
    SignUp: (state, action) =>{
      state.newUser = action.payload;
    }
    
  }
});

export const { Login, Logout, Failure, SignUp} = UserSlice.actions;
export default UserSlice.reducer;