import TodoComponent from "../TodoComponent";
import { Footer } from "./Footer";
import Header from "./Header";

const Layout = () => {
	return (
		<>
			<div>
				<Header />
				<TodoComponent />
				<main></main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
