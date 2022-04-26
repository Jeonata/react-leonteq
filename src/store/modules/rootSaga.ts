import { all } from 'redux-saga/effects';

import books from './books/saga';

export default function* rootSaga(): Generator {
  return yield all([books]);
}
