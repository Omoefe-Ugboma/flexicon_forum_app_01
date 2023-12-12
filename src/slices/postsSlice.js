import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const url = "http://localhost:3000/posts";

export const getPosts = createAsyncThunk("user/signUpUser", async () => {
  try {
    const response = await axios.get(url);
    console.log("line 45 authSlice: ", response.data);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
});

const initialState = {
  isLoading: true,
  error: null,
  id: null,
  title: null,
  content: null,
  upvotes: null,
  downvotes: null,
  replies: null,
  user_id: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder

      .addCase(signUpUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = action.error.message;
        state.isLoading = false;
      });
  },
});

// export const {content,upvotes,downvotes,replies,user_id,id} = createSlice.a
export default postsSlice.reducer;
