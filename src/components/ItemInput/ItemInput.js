import React from 'react';

import classes from './ItemInput.module.css'
import Aux from '../../hoc/Auxi'
import Input from '../UI/Input/Input';
import AddButton from '../UI/Button/Button'

const ItemInput = (props) => (
	<Aux>
		<label>Add an item to the list</label>
		<div className={classes.content}>
			<Input
				changed={props.changed}
				value={props.value}
			/>
			<AddButton 
				btnClass={classes.addBtn}
			  	clicked={props.clicked}
			>Add</AddButton>
		</div>
	</Aux>	
)
export default ItemInput;