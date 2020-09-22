import React from 'react';

import classes from './Checkbox.module.css';

const checkbox = (props) => (
	<div 
		className={props.active ? classes.checkboxOn : classes.checkbox}
		onClick={() => props.clicked()}
	>
	</div>
);
	
export default checkbox;