const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {

  switch(action.type) {
		  
    case 'INCREASE_COUNT': 
      return { counter: state.counter + 1 }

    case 'DECREASE_COUNT': 
      return { counter: state.counter - 1 }

    case 'RESET_COUNT': 
      return { counter: 0}

    default: return state
  }
};

export default reducer;


