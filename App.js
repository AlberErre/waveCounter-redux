import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './src/Counter';
import counterReducer from './src/reducers/counterReducer';

const store = createStore(counterReducer);

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
          <Counter />
      </Provider>
    );
  }
}

export default App;
