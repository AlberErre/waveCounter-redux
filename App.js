import React, { Component } from 'react';
import Counter from './src/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


import reducer from './src/reducers/reducer';

const store = createStore(reducer);


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
