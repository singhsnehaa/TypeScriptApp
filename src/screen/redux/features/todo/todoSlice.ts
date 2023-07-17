import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import todoService from './todoService';

export const getTodos = createAsyncThunk('todo/getTodo', async () => {
  try {
    const response = await todoService.getTodos();
    // console.log('response=>', response?.todos);
    return response?.todos;
  } catch (error) {
    console.log('error block=>', error);
  }
});

// Types define here

export interface Todo {
  id: number;
  todo: string;
}
interface TodoState {
  todoResponse: [];
  isLoading: boolean;
  message: string;
}

// const initialState = {
//   todoResponse: [],
//   isLoading: false,
//   message: '',
// } as TodoState;

export const todoSlice = createSlice({
  name: 'todo',
  // initialState,
  
  initialState: {
    todoResponse: [],
    isLoading: false,
    message: '',
  } as TodoState,

  reducers: {},
  extraReducers: builder => {
    builder
      .addCase('getTodos/pending', (state, action) => {
        console.log('state=>', state);
        console.log('action=>', action);
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoResponse = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload as string;
      });
  },
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;
