import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './Components/Reducer';

const store = createStore(reducer, applyMiddleware(thunk));

export default store