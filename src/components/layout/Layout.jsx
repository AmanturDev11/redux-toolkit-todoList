import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import Header from "./Header";
import Login from "../login/Login";
import TodoComponent from "../TodoComponent";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Layout = () => {
	const [cards, setCards] = useState([]);

	const getTodos = async () => {
		const url =
			"https://api-v2.elchocrud.pro/api/v1/a0d59e0c711731d42bfe08de06433d69/reduxTollcit";
		const response = await axios.get(url);
		setCards(response.data);
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<>
			<div>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Login setCards={setCards} />} />
						<Route
							path="/todoComponent"
							element={<TodoComponent cards={cards} getTodos={getTodos} />}
						/>
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
