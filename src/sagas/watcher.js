import { takeLatest } from 'redux-saga/effects';

import { searchProductsSaga } from './searchProductsSaga';
import * as types from '../constants/actionTypes';

export default function* watchSearchProducts() {
    yield takeLatest(types.SEARCH_PRODUCTS_REQUEST, searchProductsSaga);
}
