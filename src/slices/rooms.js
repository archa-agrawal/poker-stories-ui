import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/room`;

export const getOwnerRooms = createAsyncThunk("rooms_all", async () => {
  const response = await fetch(SERVER_URL, {
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});

export const createRoom = createAsyncThunk("create-room", async (roomName) => {
  console.log(roomName);
  const response = await fetch(SERVER_URL, {
    method: "POST",
    body: JSON.stringify(roomName),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});

const initial = {
  data: [],
};

const roomsSlice = createSlice({
  name: "rooms",
  initialState: initial,
  extraReducers: (builder) => {
    builder.addCase(getOwnerRooms.fulfilled, (state, { payload }) => {
      state.data = payload;
    });
    builder.addCase(createRoom.fulfilled, (state, { payload }) => {
      state.data = [...state.data, payload];
    });
  },
});

export default roomsSlice.reducer;
