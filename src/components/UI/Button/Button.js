import React from 'react';

const button = (props) => (
	<button 
		onClick={props.clicked}
		className={props.btnClass}
	>
		{props.children}
	</button>
);
export default button;