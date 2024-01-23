import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};


export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
        isTodoEditable: false
      }
      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo.isTodoEditable) {
        todo.text = text;
      }
    },
    isCompletedTodo: (state, action) => {
      const { id } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if(todo)
      todo.isCompleted = !(todo.isCompleted);

    },
    toggleEditTodo: (state, action) => {
      const todoId = action.payload;
      const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        state.todos[todoIndex].isTodoEditable = !state.todos[todoIndex].isTodoEditable;
      }
    },
}})

export const { addTodo, removeTodo, updateTodo, isCompletedTodo, toggleEditTodo } = todoSlice.actions;

export default todoSlice.reducer;

// const todo = state.todos.findIndex((todo) => todo.id === id);
//       state.todos[todo].isCompleted =!state.todos[todo].isCompleted;