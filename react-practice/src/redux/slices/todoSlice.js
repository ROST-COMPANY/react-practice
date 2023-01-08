import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      const newData = action.payload.map(el => {
        return {
          ...el,
          test: Math.round(Math.random()),
        };
      });
      state.todos = newData;
    },
  },
});

export const { setTodos } = todoSlice.actions;
export default todoSlice.reducer;
