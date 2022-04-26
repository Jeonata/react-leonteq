import { takeLatest, call, put, all, StrictEffect } from 'redux-saga/effects';

// SERVICES
import api from 'services/api';

// TYPES
import { Types } from './types';

// ACTIONS
import { getBooksSuccess, getBooksFailure } from './actions';

function* getBooks(): Generator<StrictEffect, void, string> {
  try {
    const response = yield call(api.get, `api/v1/Books`);

    yield put(getBooksSuccess(response));
  } catch (err) {
    yield put(getBooksFailure(err));
  }
}

export default all([takeLatest(Types.GET_BOOKS, getBooks)]);
