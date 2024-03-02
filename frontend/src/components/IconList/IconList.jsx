import React from "react";

export default props => (
	<img
		key={props.index}
		src={props.image}
		style={props.style}
		alt="info"
	/>
);
