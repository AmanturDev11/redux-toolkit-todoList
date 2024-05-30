import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./tools/todoSlice";

export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
});
