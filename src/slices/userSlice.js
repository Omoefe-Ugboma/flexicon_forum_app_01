import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { userLogin } from "../features/Authentication/login/login_asyncThunk";
import { userSignup } from "../features/Authentication/sign_up/sigup_asyncThunk";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogOut: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload;
        isAuthenticated = true;
        state.error = null;
        toast.success("Login Successful");
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
        toast.error("Login failed");
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        toast.success("Sign-up successful");
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
        toast.error("Sign-up failed");
      });
  },
});


export const {userLogOut} = userSlice.actions;
export default userSlice.reducer;
