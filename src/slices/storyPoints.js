import { createAsyncThunk } from "@reduxjs/toolkit";

const SERVER_URL = `${process.env.REACT_APP_SERVER_URL}/storyPoint`;

export const postVote = createAsyncThunk("post_vote", async (vote) => {
  const response = await fetch(SERVER_URL, {
    method: "POST",
    body: JSON.stringify(vote),
    headers: {
      "content-type": "application/json",
    },
    credentials: "include",
  });
  return await response.json();
});
