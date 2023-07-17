import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import todoReducer from './features/todo/todoSlice';

export const Store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

// export type AppDispatch = typeof Store.dispatch;
// export type RootState = ReturnType<typeof Store.getState>;

export const useAppDispatch = () => useDispatch<typeof Store.dispatch>();
export type RootState = ReturnType<typeof Store.getState>