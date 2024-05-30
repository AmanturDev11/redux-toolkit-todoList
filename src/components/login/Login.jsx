import { useState } from "react";

const Login = () => {
	const [cards, setCards] = useState([]);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log(cards);

	function handleLogin() {
		const newData = {
			id: Math.random(),
			email: email,
			password: password,
		};
		setCards([...cards, newData]);
	}
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
					<button onClick={handleLogin}>Add</button>
					{cards.map((item) => (
						<div key={item.id}>
							<h1>{item.email}</h1>
							<span>{item.password}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Login;
