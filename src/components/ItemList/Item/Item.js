import React, { Component } from 'react';

import classes from './Item.module.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';
import Button from '../../UI/Button/Button';

class Item extends Component{
  deleteItem(id){
      const list = [...this.props.list];
      const updatedList = list.filter(item => item.id !==id);
      this.props.update("list", updatedList);
  }
  clicked(id){
      const updatedList = this.props.list.map(
      item => (item.id!==id ? item : {id:item.id, value: item.value, active:item.active ? false : true}));
      this.props.update("list", updatedList);
  }
	render(){
		return(
			this.props.list.map(item =>{
		        let itemClass= classes.items;
		        item.active ? itemClass=classes.itemActive : itemClass=classes.items;
		        return(
		          <li key={item.id} className={itemClass}>
		            <Checkbox clicked={() => this.clicked(item.id)} active={item.active}/>
		            {item.value}
		            <Button
		              btnClass={classes.removeBtn}
		              clicked={() => this.deleteItem(item.id)}
		              item={item}
		            >x
		            </Button>
		          </li>
        		)}
    		)
		);
	}
}

export default Item;