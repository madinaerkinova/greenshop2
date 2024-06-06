import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../lib/storage";

const initialState = loadState("user") || {};

const userReduser = createSlice({
  name: "userReduser",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    removeUser: (state) => {
      return {
        ...state,
      };
    },
  },
});

export default userReduser.reducer;

export const { setUser, removeUser } = userReduser.actions;
