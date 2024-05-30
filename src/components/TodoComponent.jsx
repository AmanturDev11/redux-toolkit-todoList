// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addTodo, deleteAll, deleteTodo } from "../redux/tools/todoSlice";

// const TodoComponent = () => {
// 	const [name, setName] = useState("");
// 	const [age, setAge] = useState(0);
// 	const todos = useSelector((state) => state.todos.data);
// 	console.log(todos);

// 	const [isChecked, setIsChecked] = useState(false);

// 	const handleCheckboxChange = () => {
// 		setIsChecked(!isChecked);
// 	};

// 	const dispatch = useDispatch();

// 	const addTodoItem = () => {
// 		dispatch(addTodo({ name, age }));
// 		dispatch(setName(""), setAge(0));
// 	};

// 	const deleteTodoItem = (id) => {
// 		dispatch(deleteTodo(id));
// 	};

// 	const handleDelete = () => {
// 		dispatch(deleteAll([]));
// 	};

// 	return (
// 		<>
// 			<div>
// 				<input
// 					type="text"
// 					value={name}
// 					onChange={(e) => setName(e.target.value)}
// 					placeholder="Enter name"
// 				/>
// 				<input
// 					type="number"
// 					value={age}
// 					onChange={(e) => setAge(e.target.value)}
// 					placeholder="Enter age"
// 				/>
// 				<button onClick={addTodoItem}>Add Todo</button>
// 				<button onClick={handleDelete}>DeleteAll</button>
// 				<input type="checkbox" />
// 				{todos.map((item) => (
// 					<div key={item.id}>
// 						<h1 style={{ textDecoration: isChecked ? "line-through" : "none" }}>
// 							{item.name}
// 						</h1>
// 						<h2 style={{ textDecoration: isChecked ? "line-through" : "none" }}>
// 							{item.age}
// 						</h2>
// 						<input
// 							type="checkbox"
// 							checked={isChecked}
// 							onChange={handleCheckboxChange}
// 						/>
// 						<button onClick={() => deleteTodoItem(item.id)}>Delete</button>
// 					</div>
// 				))}
// 			</div>
// 		</>
// 	);
// };

// export default TodoComponent;

// !!
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteAll, deleteTodo } from "../redux/tools/todoSlice";

const TodoComponent = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const todos = useSelector((state) => state.todos.data);
	const dispatch = useDispatch();

	const [checkedItems, setCheckedItems] = useState({});
	const [isAllChecked, setIsAllChecked] = useState(false);

	const handleCheckboxChange = (id) => {
		setCheckedItems((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};

	const handleMasterCheckboxChange = () => {
		const newCheckedState = !isAllChecked;
		setIsAllChecked(newCheckedState);
		const newCheckedItems = {};
		todos.forEach((item) => {
			newCheckedItems[item.id] = newCheckedState;
		});
		setCheckedItems(newCheckedItems);
	};

	const addTodoItem = () => {
		dispatch(addTodo({ name, age }));
		setName("");
		setAge(0);
	};

	const deleteTodoItem = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleDelete = () => {
		dispatch(deleteAll([]));
		setCheckedItems({});
		setIsAllChecked(false);
	};

	return (
		<>
			<div>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Enter name"
				/>
				<input
					type="number"
					value={age}
					onChange={(e) => setAge(Number(e.target.value))}
					placeholder="Enter age"
				/>
				<button onClick={addTodoItem}>Add Todo</button>
				<button onClick={handleDelete}>Delete All</button>
				<input
					type="checkbox"
					checked={isAllChecked}
					onChange={handleMasterCheckboxChange}
				/>
				{todos.map((item) => (
					<div key={item.id}>
						<h1
							style={{
								textDecoration: checkedItems[item.id] ? "line-through" : "none",
							}}>
							{item.name}
						</h1>
						<h2
							style={{
								textDecoration: checkedItems[item.id] ? "line-through" : "none",
							}}>
							{item.age}
						</h2>
						<input
							type="checkbox"
							checked={!!checkedItems[item.id]}
							onChange={() => handleCheckboxChange(item.id)}
						/>
						<button onClick={() => deleteTodoItem(item.id)}>Delete</button>
					</div>
				))}
			</div>
		</>
	);
};

export default TodoComponent;
