import { fromJS } from 'immutable';
import * as types from '../constants/actionTypes'

const searchProductsReducer = (initialState = {}) => {
	return (state = initialState, action) => {
        switch (action.type) {
            case types.SEARCH_PRODUCTS_SUCCESS:
                return state.set('payload', fromJS(action.products));

            default:
                return state;
        }
    };
};

export { searchProductsReducer };
