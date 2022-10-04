import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
  },
};

const roomSlice = createSlice({
  name: "room",
  initialState: initial,
  extraReducers: (builder) => {
    builder.addCase(getRoom.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
  },
});

export default roomSlice.reducer;
