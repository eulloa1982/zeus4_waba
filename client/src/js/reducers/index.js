import { OWN_MESSAGE_OUT, 
        ERROR_IN, 
        ALL_MSG,
        DELETE_ALL_MSG
      } from "../constants/index";

const initialState = {
  articles: [],
  messages_out: [{mobile: '', message: ''}],
  errors_in: [],
  messages_id: [],
  all_msgs: []
};


function rootReducer(state = initialState, action) {
  switch(action.type)  {
    case OWN_MESSAGE_OUT: {
      return Object.assign({}, state, {
        messages_out: state.messages_out.concat(action.payload)
      });
    }

    case ERROR_IN: {
      return Object.assign({}, state, {
        errors_in: state.errors_in.concat(action.payload)
      });
    }

    case ALL_MSG: {
      return Object.assign({}, state, {
        all_msgs: state.all_msgs.concat(action.payload)
      });
    }

    case DELETE_ALL_MSG: {
      const byId = action.payload
      return {
        ...state,
        all_msgs: state.all_msgs.filter(msg => msg.id !== byId),
        messages_id: state.messages_id.concat(byId)
      }
    }
      
    
    default:
      return state;
  }
}


export default rootReducer;
