import {applyMiddleware, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../modules';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store