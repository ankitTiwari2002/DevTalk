import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    hasNewMessage: false,
    unreadCount: 0,
  },
  reducers: {
    addNotification: (state) => {
      state.hasNewMessage = true;
      state.unreadCount += 1;
    },
    clearNotifications: (state) => {
      state.hasNewMessage = false;
      state.unreadCount = 0;
    },
  },
});

export const { addNotification, clearNotifications } = notificationSlice.actions;
export default notificationSlice.reducer;
