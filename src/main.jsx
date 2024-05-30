import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import ReduxProvider from "./redux/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ReduxProvider>
			<App />
		</ReduxProvider>
	</React.StrictMode>
);
