import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:3000/users";
export const userLogin = createAsyncThunk(
  "user/userLogin",
  async (userData) => {
    try {
      const response = await axios.post(url, userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
);
