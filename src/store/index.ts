import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { SliceNameSpace } from '../consts/enum';
import appSlice from './app-slice/app-slice';
import { redirect } from './middlewares/redirect/redirect';

export type RootReducer = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const rootReducer = combineReducers({
  [SliceNameSpace.App]: appSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(redirect)
});
