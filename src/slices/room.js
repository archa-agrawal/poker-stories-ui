import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createStory } from "./story";
const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/room`;

export const getRoom = createAsyncThunk("get_room", async (id) => {
  const response = await fetch(`${SERVER_URL}/${id}`, {
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
    name: "",
    stories: [],
    voterId: "",
    isRoomOwner: false,
  },
};

const roomSlice = createSlice({
  name: "room",
  initialState: initial,
  extraReducers: (builder) => {
    builder.addCase(getRoom.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
    builder.addCase(createStory.fulfilled, (state, { payload }) => {
      state.data.stories = [...state.data.stories, payload];
    });
  },
});

export default roomSlice.reducer;
