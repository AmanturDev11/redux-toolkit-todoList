// import { configureStore } from "@reduxjs/toolkit";
// import { todoReducer } from "./tools/todoSlice";
// import { useDispatch } from "react-redux";

// export const store = configureStore({
//   reducer: {
//     todoReducer,
//   }
// })

// // export typeof store.getState;
// export useDispatch = typeof store.dispatch
// !!!!
// import { configureStore } from "@reduxjs/toolkit";
// import { todoReducer } from "./tools/todoSlice";

// export const store = configureStore({
// 	reducer: {
// 		todos: todoReducer,
// 	},
// });

import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./tools/todoSlice";

export const store = configureStore({
	reducer: {
		todos: todoReducer,
	},
});
