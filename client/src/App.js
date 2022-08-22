import "./App.css";
import { Route } from "react-router-dom";
import Login from "./Pages/Login";
import Chats from "./Pages/Chats";

function App() {
	return (
		<div className="App">
			<Route path="/" component={Login} exact />
			<Route path="/chats" component={Chats} exact />
		</div>
	);
}

export default App;
