import { createStore, combineReducers } from 'redux';
import results from './reducers/results';
import currentPosition from './reducers/currentPosition'; 

const reducer = combineReducers({
    results,
    currentPosition
});

const store = createStore(reducer);

export default store;