import * as types from '../constants/actionTypes';

export const searchProductsAction = (payload) => ({
    type: types.SEARCH_PRODUCTS_REQUEST,
    payload
});