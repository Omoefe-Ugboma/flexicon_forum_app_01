
features/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3000/users";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    logoutUser: (state) => {
      (state.user = null), (state.isAuthenticated = false);
    },

    extraReducers: (builder) => {
      builder
        .addCase(signupUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isAuthenticated = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.user = action.payload;
          state.isAuthenticated = true;
        });
    },
  },
});

// Async action for signing up
export const signupUser = createAsyncThunk(
  "auth/signupUser",
  async (userData) => {
    try {
      const response = await axios.post(url, userData);
    } catch (error) {
      console.error("Error signing up: ", error);
    }
  }
);

// Async action for logging in
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData) => {
    try {
      const response = await axios.post(url, {
        email: userData.email,
        password: userData.password,
      });
      // checking for data response
      if (response.data.length > 0) {
        return response.data[0];
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      console.error("Error logging in : ", error);
    }
  }
);

export const { setUsers, logoutUser } = authSlice.actions;

export const selectUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
