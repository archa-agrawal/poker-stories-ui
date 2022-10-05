import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postVote } from "./storyPoints";
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

export const updateFinalPoints = createAsyncThunk(
  "final_points",
  async (finalVote) => {
    const response = await fetch(SERVER_URL, {
      method: "POST",
      body: JSON.stringify(finalVote),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    return await response.json();
  }
);

const initial = {
  data: {
    id: "",
    title: "",
    final_points: "",
    room_id: "",
    isOwner: false,
    hasVoted: false,
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
    builder.addCase(postVote.fulfilled, (state, { payload }) => {
      state.data.points = [...state.data.points, payload];
      state.data.hasVoted = true;
    });
    builder.addCase(updateFinalPoints.fulfilled, (state, { payload }) => {
      state.data.final_points = payload.final_points;
    });
  },
});

export default storySlice.reducer;
