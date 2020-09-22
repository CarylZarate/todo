import React from 'react';

import classes from './Layout.module.css';
import Aux from '../../hoc/Auxi';

const layout = (props) => (
      <Aux>
        <div className={classes.content}>
          {props.children}
        </div>
      </Aux>
);
  
export default layout;