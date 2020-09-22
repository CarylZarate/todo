import React from 'react';

import Aux from './hoc/Auxi';
import Layout from './components/Layout/Layout';
import ListBody from './hoc/ListBody';

function App() {
  return (
    <Aux >
      <Layout>
        <ListBody />
      </Layout>
    </Aux>
  );
}

export default App;
