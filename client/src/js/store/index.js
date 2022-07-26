import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import errorReducer from '../reducers/errors';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk)),
    //applyMiddleware(forbiddenDataUrl)
  );


export default store;