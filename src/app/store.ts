import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import hackerNewsReducer from '../features/hackerNews/hackerNewsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hackerNews: hackerNewsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
