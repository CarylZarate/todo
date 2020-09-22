import React from 'react';

const input = (props) => (
	<input
		type="text"
		placeholder="Type new item here"
		value={props.value}
		onChange={props.changed}
	/>
);
export default input;