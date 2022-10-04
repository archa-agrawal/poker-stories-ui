import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/story`;

export const getStory = createAsyncThunk("get_story", async (id) => {
  const response = await fetch(`${SERVER_URL}/${id}`, {
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});

export const createStory = createAsyncThunk("create-story", async (story) => {
  const response = await fetch(`${SERVER_URL}/create`, {
    method: "POST",
    body: JSON.stringify(story),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});

const initial = {
  data: {
    id: "",
    title: "",
    final_points: "",
    room_id: "",
    isOwner: "",
    points: [],
  },
};

const storySlice = createSlice({
  name: "story",
  initialState: initial,
  extraReducers: (builder) => {
    builder.addCase(getStory.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export default storySlice.reducer;
