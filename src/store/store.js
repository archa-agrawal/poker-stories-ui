import { configureStore } from "@reduxjs/toolkit";

import user from "../slices/user";
import rooms from "../slices/rooms";

export default configureStore({
  reducer: {
    user,
    rooms,
  },
});
