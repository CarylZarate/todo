import React, {Component} from 'react';
import ItemInput from '../../components/ItemInput/ItemInput';
import ItemList from '../../components/ItemList/ItemList';
import Aux from '../../hoc/Auxi';
import classes from './ListBuilder.module.css'

class ListBuilder extends Component{
  state={
  	newItem:"",
  	list:[{id:0, value:'Task 1', active: false,}]
  }
  updateInput = (key, value) => {
      this.setState({
        [key]:value
      });
  }
  addItem(){
    const newItem={
        id: 1+Math.random(),
        value: this.state.newItem.slice(),
        active: false
    };
    const list= [...this.state.list];
      if (newItem.value.length!==0){
          list.push(newItem);
          this.setState({list, newItem:""});
    }
  }
  render(){
    return(
      <Aux>
        <div className={classes.content}>
        	<ItemInput 
            value={this.state.newItem}
            changed={e => this.updateInput("newItem", e.target.value)}
            clicked={() => this.addItem()}
            />
          <ItemList 
            list={this.state.list}
            update={this.updateInput}/>
        </div>
      </Aux>
    )
  }
}
export default ListBuilder;