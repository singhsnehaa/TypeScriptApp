import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import todoService from './todoService';

export const getTodos = createAsyncThunk('todo/getTodo', async () => {
  try {
    const response = await todoService.getTodos();
    return response?.todos;
  } catch (error) {
    console.log('error block=>', error);
  }
});

export const addTodo = createAsyncThunk('todo/addTodo', async (body: Todo) => {
  try {
    const response = await todoService.addTodo(body);
    console.log('response=>', response);
    return response;
  } catch (error) {
    console.log('error block=>', error);
  }
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (todoId:number) => {
  try {
    const response = await todoService.deleteTodo(todoId);
    console.log('response delete=>', response);
    return response;
  } catch (error) {
    return 'Something Went wrong';
  }
});

// Types define here

export interface Todo {
  id?: number;
  todo?: string;
  completed: boolean;
  userId: number;
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
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.todoResponse = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload as string;
      })
      .addCase(addTodo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addTodo.fulfilled, (state:any, action) => {
        state.isLoading = false;
        // state.todoResponse = state.todoResponse.push(action.payload);
        state.todoResponse.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload as string;
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state:any, action) => {
        state.isLoading = false;
        state.todoResponse = state.todoResponse.filter(
          (todo:any) => todo.id !== action.payload.id,
        );
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload as string;
      });
  },
});

// export const {} = todoSlice.actions;
export default todoSlice.reducer;
