
const initialState = {
  errors: [],
};


function errorReducer(state = initialState, action) {
  switch(action.type)  {
    case 'ERROR_IN': {
      return Object.assign({}, state, {
        errors: state.errors.concat(action.payload)
      });
    }
    
    default:
      return state;
  }
}


export default errorReducer;
