import logo from "./logo.svg";
import Line from "./components/Line/Line";
import "./App.css";
import { useState } from "react";

function App() {
	// const [noOfBars, setBars] = useState("");
	// const [timeSignature, setSignature] = useState("");

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1>
					Spiral
				</h1>
			</header>
		</div>
	);
}

export default App;
