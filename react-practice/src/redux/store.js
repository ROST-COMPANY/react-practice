import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
// slices
import loginSlice from "./slices/loginSlice";

const middlewares = [logger];

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
  middleware: middlewares,
});

export default store;
