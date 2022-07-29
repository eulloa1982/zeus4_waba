import { OWN_MESSAGE_IN } from "../constants/index";

const initialState = {
  articles: [],
  messages_in: [{mobile: '', message: ''}],
  errors_in: []
};


function rootReducer(state = initialState, action) {
  switch(action.type)  {
    case OWN_MESSAGE_IN: {
      return Object.assign({}, state, {
        messages_in: state.messages_in.concat(action.payload)
      });
    }

    case "ERROR_IN": {
      return Object.assign({}, state, {
        errors_in: state.errors_in.concat(action.payload)
      });
    }
    
    default:
      return state;
  }
}


export default rootReducer;
