import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();

    return {
		...createStore(
            rootReducer,
            composeWithDevTools(
				applyMiddleware(sagaMiddleware))
		),
		runSaga: sagaMiddleware.run(rootSaga)
	};
};