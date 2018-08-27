import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState = Immutable.Map()) {
    const sagaMiddleware = createSagaMiddleware();

    return {
		...createStore(
            rootReducer,
			applyMiddleware(sagaMiddleware)),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};