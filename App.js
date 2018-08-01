import React, { Component } from 'react';
import Counter from './src/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux stuff

import reducer from './src/reducers/reducer';

const store = createStore(reducer);

// end Redux stuff

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	// Provider va aqui para envolver toda la app con el global store
    	// Para que comunique, tenemos que usar "connect" dentro de "Counter"
		<Provider store={store}>
	  		<Counter />
	 	</Provider>
    );
  }
}

export default App;
