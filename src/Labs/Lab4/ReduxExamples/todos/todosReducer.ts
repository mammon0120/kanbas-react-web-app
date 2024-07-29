import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = [
        ...state.todos,
        {...action.payload, id: new Date().getTime().toString()},
      ];
      state.todos = newTodo;
      state.todo = { title: "" };
    },
    deleteTodo: (state, action) => {
      const newTodo = state.todos.filter((item) =>
      item.id !== action.payload.id);
      state.todos = newTodo;
    },
    updateTodo: (state, action) => {
      const newTodo = state.todos.map((item) => 
      item.id === action.payload.id ? action.payload : item);
      state.todos = newTodo;
      state.todo = { title: "" };
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;
