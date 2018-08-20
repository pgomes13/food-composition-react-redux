import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Immutable from 'immutable';
import rootReducer from './reducers/rootReducer';

export default function configureStore(initialState = Immutable.Map()) {
	return createStore(
		rootReducer,
		applyMiddleware(thunk)
		);
};