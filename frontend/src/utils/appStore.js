import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import ConnectionReducer from "./connectionSlice";
import requestReducer from "./requestSlice";
import notificationReducer from "./notificationSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    Connection: ConnectionReducer,
    request: requestReducer,
    notifications: notificationReducer,
  },
});

export default appStore;
