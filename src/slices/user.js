import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/user`;

export const registerUser = createAsyncThunk("register_user", async (user) => {
  const response = await fetch(`${SERVER_URL}/register`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});

export const loginUser = createAsyncThunk("login_user", async (user) => {
  const response = await fetch(`${SERVER_URL}/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});

export const getUserProfile = createAsyncThunk("user_profile", async () => {
  const response = await fetch(`${SERVER_URL}/profile`, {
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("Unauthorized");
  }
  return await response.json();
});

export const logoutUser = createAsyncThunk("logout_user", async () => {
  const response = await fetch(`${SERVER_URL}/logout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
  });
});

const initial = {
  profile: {
    name: "",
    email: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: initial,
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      console.log(payload);
      state.profile = payload;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.profile = payload;
    });
    builder.addCase(getUserProfile.fulfilled, (state, { payload }) => {
      state.profile = payload;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.profile = initial;
    });
    builder.addCase(getUserProfile.rejected, (state) => {
      state.profile = initial;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.profile = initial;
    });
  },
});

export default userSlice.reducer;
