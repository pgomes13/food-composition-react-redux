import { combineReducers } from 'redux-immutablejs';
import { Map } from 'immutable';

import { searchProductsReducer } from './searchProductsReducer';

export default combineReducers({
    data: combineReducers({
        products: searchProductsReducer(Map({}))
    })
});