import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Map } from 'immutable';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState = Map()) {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware))
    );

	sagaMiddleware.run(rootSaga);

	return store;
};