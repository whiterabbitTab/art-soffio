import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = 0

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    nigger: (state, {payload: newState}: PayloadAction<number>) => {
      state = newState
      return state
    }
  }
})