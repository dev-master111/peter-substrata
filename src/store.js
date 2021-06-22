import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers'; // Gets the State from the reducer(s)

const store = createStore(reducer, composeWithDevTools());

export default store;
