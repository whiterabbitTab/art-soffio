import { IBasket, IUserInfo } from "@/types/user.type";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { userInfo } from "os";

const initialState: IUserInfo = 
{
  basket: [],
  email: '',
  name: '',
  phone: '',
  surname: '',
  icon: '',
  username: '',
  loading: true,
  id: ''
} 

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, {payload: [id, value]}: PayloadAction<[string, string | IBasket | boolean]>) => {
      if (typeof value === 'string' || typeof value === 'boolean') {
        state = { ...state, [id]: value }
      }
      return state
  }}
})

export const { actions } = userSlice