import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = Immutable.Map()) {
	return createStore(
		rootReducer,
		composeWithDevTools(
			applyMiddleware(thunk)
	));
};