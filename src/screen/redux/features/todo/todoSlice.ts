import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import todoService from './todoService';

export const getTodos = createAsyncThunk('todo/getTodo', async () => {
  console.log('hhii');
  try {
    const response = await todoService.getTodos();
    console.log('response=>', response)
  } catch (error) {
    console.log('error block=>', error)
  }
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todoResponce: [],
    isLoading: false,
    message: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase('getTodos/pending', (state, action) => {})
      .addCase('getTodos/fulfilled', (state, action) => {})
      .addCase('getTodos/rejected', (state, action) => {});
  },
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;
