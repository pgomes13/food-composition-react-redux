import initialState from './initialState';
import * as types from '../constants/actionTypes'

export default (state = initialState, action) => {
	switch (action.type) {
		case types.SEARCH_PRODUCTS_REQUEST:
			return [...state, action.products];

		default:
			return state;
	}
};