import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteAll, deleteTodo } from "../redux/tools/todoSlice";

const TodoComponent = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState(0);
	const todos = useSelector((state) => state.todos.data);
	console.log(todos);

	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const dispatch = useDispatch();

	const addTodoItem = () => {
		dispatch(addTodo({ name, age }));
		dispatch(setName(""), setAge(0));
	};

	const deleteTodoItem = (id) => {
		dispatch(deleteTodo(id));
	};

	const handleDelete = () => {
		dispatch(deleteAll([]));
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
					onChange={(e) => setAge(e.target.value)}
					placeholder="Enter age"
				/>
				<button onClick={addTodoItem}>Add Todo</button>
				<button onClick={handleDelete}>DeleteAll</button>
				{todos.map((item) => (
					<div key={item.id}>
						<h1 style={{ textDecoration: isChecked ? "line-through" : "none" }}>
							{item.name}
						</h1>
						<h2 style={{ textDecoration: isChecked ? "line-through" : "none" }}>
							{item.age}
						</h2>
						<input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
						/>
						<button onClick={() => deleteTodoItem(item.id)}>Delete</button>
					</div>
				))}
			</div>
		</>
	);
};

export default TodoComponent;
