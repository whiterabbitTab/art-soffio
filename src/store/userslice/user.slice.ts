import { IBasket, IUser } from "@/types/user.type";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: IUser = 
{
  basket: [],
  email: '',
  icon: '',
  name: '',
  phone: '',
  surname: '',
  username: ''
} 

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, {payload: [id, value]}: PayloadAction<[string, string | IBasket]>) => {
      if (typeof value === 'string') {
        state[id as keyof object] = value
      }
      return state
  }}
})

export const { actions } = userSlice