import { configureStore } from "@reduxjs/toolkit";

import user from "../slices/user";
import rooms from "../slices/rooms";
import room from "../slices/room";
import story from "../slices/story";

export default configureStore({
  reducer: {
    user,
    rooms,
    room,
    story,
  },
});
