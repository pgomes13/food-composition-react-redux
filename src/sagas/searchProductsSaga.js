import { put, call } from 'redux-saga/effects';

import { searchProducts } from '../api';
import * as types from '../constants/actionTypes';

/**
 * Responsible for making the api calls to be usda endpoint,
 * and instructing the redux-saga middle ware on the next line of action,
 * for success or failure operation.
 * @param payload
 */
export function* searchProductsSaga({ payload }) {
    try {
        const products = yield call(searchProducts, payload);

        yield [
            put({ type: types.SEARCH_PRODUCTS_SUCCESS, products })
        ];
    } catch (error) {
        yield put({ type: types.SEARCH_PRODUCTS_ERROR, error });
    }
}