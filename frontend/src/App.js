import React from "react";
import "./App.css";
import logo from "./logo.svg";
// import Line from "./components/Line/Line";
import IconList from "./components/IconList/IconList";

class App extends React.Component {
	state = {
		listOfImages: []
	};

	importAll = r => {
		return r.keys().map(r);
	};

	componentDidMount() {
		const images = this.importAll(
			require.context("./img/", false, /\.(png)$/)
		);
		this.setState({ listOfImages: images });
	}

	render() {
		return (
			<div>
				<h1>here</h1>
				{this.state.listOfImages.map((image, index) => (
					<IconList
						image={image}
						index={index}
						style={{
							height: "3vh",
							paddingRight: "7px"
						}}
					/>
				))}
			</div>
		);
	}
}

export default App;
