import initialState from './initialState';
import * as types from '../constants/actionTypes'

export default (state = initialState.products, action) => {
	switch (action.type) {
		case types.SEARCH_PRODUCTS_SUCCESS:
			return [...state, action.products];

		default:
			return state;
	}
};