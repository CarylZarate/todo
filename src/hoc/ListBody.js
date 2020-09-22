import React from 'react';

import Header from '../components/Header/Header';
import Aux from './Auxi';
import classes from './ListBody.module.css'
import ListBuilder from '../containers/ListBuilder/ListBuilder'

const ListBody = (props) => (
  <Aux>
    <div className={classes.content}>
    	<Header>#My TODO List</Header>
    	<ListBuilder 
        newItem={props.newItem}
      />
    </div>
  </Aux>
);

export default ListBody;