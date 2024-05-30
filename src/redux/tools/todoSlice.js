// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
// 	data: [],
// };

// const todoSlice = createSlice({
// 	name: "todo",
// 	initialState,
// 	reducers: {
// 		addTodo: (state, action) => {
// 			const newData = {
// 				id: Date.now(),
// 				// id: Math.random(),
// 				name: action.payload.name,
// 				age: action.payload.age,
// 			};
// 			state.data.push(newData);
// 		},
// 	},
// });

// export const { addTodo } = todoSlice.actions;
// export const todoReducer = todoSlice.reducer;

// !!
// import { createSlice } from "@reduxjs/toolkit";

// // const newCards = {
// // 	id: number
// // 	name,
// // 	age,
// // };

// const initialState  = {
// 	data: [],
// };

// const todoSlice = createSlice({
// 	name: "todo",
// 	initialState,
// 	reducers: {
// 		addTodo: (state, action) => {
// 			const newData = {
// 				id: Date.now(),
// 				name: action.payload.name,
// 				age: action.payload.age,
// 			};
// 			state.data.push(newData);
// 		},
// 	},
// });

// export const { addTodo } = todoSlice.actions;
// export const todoReducer = todoSlice.reducer;
// !!!!
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

const todoSlice = createSlice({
	name: "todo",
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const newData = {
				id: Date.now(),
				name: action.payload.name,
				age: action.payload.age,
			};
			state.data.push(newData);
		},
		deleteTodo: (state, action) => {
			state.data = state.data.filter((todo) => todo.id !== action.payload);
		},
		deleteAll: (state, action) => {
			state.data = state.data.filter((todo) => todo === action.payload);
		},
	},
});

export const { addTodo, deleteTodo, deleteAll } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
// 	data: [],
// };

// const todoSlice = createSlice({
// 	name: "todo",
// 	initialState,
// 	reducers: {
// 		addTodo: (state, action) => {
// 			const newData = {
// 				id: Date.now(),
// 				name: action.payload.name,
// 				age: action.payload.age,
// 			};
// 			state.data.push(newData);
// 		},
// 		deleteTodo: (state, action) => {
// 			state.data = state.data.filter((todo) => todo.id !== action.payload);
// 		},
// 	},
// });

// export const { addTodo, deleteTodo } = todoSlice.actions;
// export const todoReducer = todoSlice.reducer;
