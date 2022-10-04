import { configureStore } from "@reduxjs/toolkit";

import user from "../slices/user";
import rooms from "../slices/rooms";
import room from "../slices/room";

export default configureStore({
  reducer: {
    user,
    rooms,
    room,
  },
});
