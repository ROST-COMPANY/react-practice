import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// slices
import loginSlice from "./slices/loginSlice";
import todoSlice from "./slices/todoSlice";

const middlewares = [logger];

const store = configureStore({
  reducer: {
    login: loginSlice,
    todo: todoSlice,
  },
  middleware: middlewares,
});

export default store;
