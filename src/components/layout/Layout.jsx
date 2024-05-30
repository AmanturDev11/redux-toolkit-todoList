import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import Header from "./Header";
import Login from "../login/Login";
import TodoComponent from "../TodoComponent";

const Layout = () => {
	return (
		<>
			<div>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/todoComponent" element={<TodoComponent />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
