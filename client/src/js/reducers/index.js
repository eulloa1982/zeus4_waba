import { OWN_MESSAGE_IN, ERROR_IN, FROM_PREV_MSG, TO_PREV_MSG } from "../constants/index";

const initialState = {
  articles: [],
  messages_in: [{mobile: '', message: ''}],
  errors_in: [],
  to_prev_messages: [{message: ''}],
  from_prev_messages: [{message: ''}]
};


function rootReducer(state = initialState, action) {
  switch(action.type)  {
    case OWN_MESSAGE_IN: {
      return Object.assign({}, state, {
        messages_in: state.messages_in.concat(action.payload)
      });
    }

    case ERROR_IN: {
      return Object.assign({}, state, {
        errors_in: state.errors_in.concat(action.payload)
      });
    }

    case TO_PREV_MSG: {
      return Object.assign({}, state, {
        to_prev_messages: state.to_prev_messages.concat(action.payload)
      });
    }

    case FROM_PREV_MSG: {
      return Object.assign({}, state, {
        from_prev_messages: state.from_prev_messages.concat(action.payload)
      });
    }
    
    default:
      return state;
  }
}


export default rootReducer;
