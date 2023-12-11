import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const url = "http://54.82.87.188:3000/api/users/v1/";

// Async thunk action for signing up
export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (userData) => {
    try {
      console.log('1', userData)
      const response = await axios.post(url+'signup', userData);
      console.log("line 45 authSlice: ", response.data);
      return response.data;
    } catch (error) {
      console.log(error.response.data)
      throw error;
    }
  }
);

// Async action for logging in
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(url+"login", userData);
      return response.data;
    } catch (error) {
      console.log('1.5', error.response.data.msg)
      throw error.response.data.msg;
    }
  }
);

// Async action for logout
export const logoutUser = createAsyncThunk("user/logoutUser", async () => {
  return null;
});

const initialState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log('2', action.payload)
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        toast.success("Login Successful");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
        console.log('3', action.error.message)
        toast.error("Login failed");
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        console.log('4', action.payload)
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        toast.success("Sign-up successful");
      })
      .addCase(signUpUser.rejected, (state, action) => {
        console.log('5', action.payload)
        state.isAuthenticated = false;
        state.error = action.error.message;
        toast.error("Sign-up failed");
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        toast.success("LogOut successful");
      });
  },
});

export default userSlice.reducer;
