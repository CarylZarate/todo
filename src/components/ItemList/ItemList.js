import React from 'react';

import Item from './Item/Item'

const itemList = (props) => (
    <ul>
      <Item 
      	list={props.list}
      	changed={props.changed}
      	clicked={props.clicked}
      	update={props.update}/>
    </ul>
);
export default itemList;