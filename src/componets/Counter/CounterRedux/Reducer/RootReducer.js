import { INC, DEC } from '../Actions/constants';

const initialState = {
  counter: {
    count: 0,
  },
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case INC:
      return {
        ...state,
        counter: {
          ...state.counter,
          count: state.counter.count + 1,
        }
      };
    case DEC:
      const newState = JSON.parse(JSON.stringify(state));
      newState.counter.count--;
      
      return newState;
    default:
      return state;
  }
}

export default rootReducer;
