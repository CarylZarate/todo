import React from 'react';

import classes from './Header.module.css';

const itemheader = (props) => (
	<h1 className={classes.title}>{props.children}</h1>
);
export default itemheader;