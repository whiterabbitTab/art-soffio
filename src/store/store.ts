import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userslice/user.slice";
import { productsApi } from "./api/products.api";
import { collectionApi } from "./api/collection.api";

const reducers = combineReducers({
  userSlice: userSlice.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [collectionApi.reducerPath]: collectionApi.reducer
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(productsApi.middleware).concat(collectionApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch