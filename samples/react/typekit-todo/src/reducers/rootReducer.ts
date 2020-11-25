import { combineReducers } from "@reduxjs/toolkit";
import todoReducer from "../features/todos/todoSlice";
import visiblityFilterReducer from "../features/filters/filterSlice";

const rootReducer = combineReducers({
  todos: todoReducer,
  visiblityFilter: visiblityFilterReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
