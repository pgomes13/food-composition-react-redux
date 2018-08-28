import { combineReducers } from 'redux';
import Immutable from 'immutable';

import { searchProductsReducer } from './searchProductsReducer';

export default combineReducers({
    data: combineReducers({
        products: searchProductsReducer(Immutable.Map({}))
    })
});