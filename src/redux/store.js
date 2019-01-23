import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

let store = createStore(rootReducer);

export default store;