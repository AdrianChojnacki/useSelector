import React from 'react';
import { Provider } from 'react-redux';

import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>BLABALBLA</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </Provider>
  )
}

export default App;
