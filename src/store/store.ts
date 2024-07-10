import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userslice/user.slice";

const reducers = combineReducers({
  userSlice: userSlice.reducer
})

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch