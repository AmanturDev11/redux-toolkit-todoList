/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const url =
	"https://api-v2.elchocrud.pro/api/v1/a0d59e0c711731d42bfe08de06433d69/reduxTollcit";

const Login = ({ setCards }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// function handleLogin() {
	// 	const newData = {
	// 		id: Math.random(),
	// 		email: email,
	// 		password: password,
	// 	};
	// 	setCards([...cards, newData]);
	// }
	const handleAdd = async () => {
		const newData = {
			email,
			password,
		};
		const response = await axios.post(url, newData);
		setCards(response.data);
		setEmail("");
		setPassword("");
	};

	const getTodos = async () => {
		const response = await axios.get(url);
		setCards(response.data);
	};

	useEffect(() => {
		getTodos();
	}, []);
	return (
		<div>
			<div>
				<div>
					<h1>Login</h1>
					<input
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<Link to="/todoComponent">
						<button onClick={handleAdd}>Add</button>
					</Link>
					{/* {cards.map((item) => (
						<div key={item.id}>
							<h1>{item.email}</h1>
							<span>{item.password}</span>
						</div>
					))} */}
				</div>
			</div>
		</div>
	);
};

export default Login;
