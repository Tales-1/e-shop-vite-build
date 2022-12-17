import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import dataReducer from "../features/dataSlice"
import screenReducer from "../features/screenSlice"
import cartReducer from "../features/cartSlice"
import userReducer from "../features/userSlice"

import { persistReducer, persistStore,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from "redux-persist"
import storage from "redux-persist/lib/storage"


const persistConfig = {
  key:"root",
  storage,
  blacklist:["screen"]
}

const reducers = combineReducers(
    {
      fetcher:dataReducer,
      cart:cartReducer,
      screen:screenReducer,
      user:userReducer
  })

const persistedReducers = persistReducer(persistConfig,reducers)

export const store = configureStore({
  reducer:persistedReducers,
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                false:false
            },
        }),
  devTools: process.env.NODE_ENV !== 'production',
});

export const persister = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
