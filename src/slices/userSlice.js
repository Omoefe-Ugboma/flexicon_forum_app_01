import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const url = "http://localhost:3000/users";

// Async thunk action for signing up
export const signUpUser = createAsyncThunk(
  "user/signUpUser",
  async (userData) => {
    try {
      const response = await axios.post(url, userData);
      console.log("line 45 authSlice: ", response.data);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);

// Async action for logging in
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userData) => {
    try {
      const response = await axios.post("url", userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
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
        state.user = action.payload;
        isAuthenticated = true;
        state.error = null;
        toast.success("Login Successful");
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.error = action.error.message;
        toast.error("Login failed");
      })
      .addCase(signUpUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
        toast.success("Sign-up successful");
      })
      .addCase(signUpUser.rejected, (state, action) => {
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
