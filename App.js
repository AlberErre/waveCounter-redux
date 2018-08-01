import React, { Component } from 'react';
import Counter from './src/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Redux stuff

const initialState = {
	counter: 0
};

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case 'INCREASE_COUNT': 
      return { counter: state.counter + 1}

    case 'DECREASE_COUNT': 
      return { counter: state.counter - 1}

    case 'RESET_COUNT': 
      return { counter: 0}

    default: return state
  }
};

const store = createStore(reducer);

// end Redux stuff

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	// Provider va aqui para envolver toda la app con el store
    	// Para que comunique, tenemos que usar mapStateToProps + connect
		<Provider store={store}>
	  		<Counter />
	 	</Provider>
    );
  }
}

export default App;
