/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, CombinedState, combineReducers } from 'redux';

import { ReducerAction } from './types';

// REDUCERS
import books from './books/reducer';

const allReducers = combineReducers({
  books,
});

function rootReducer(
  state: CombinedState<any> | undefined,
  action: Action<any>,
): any {
  return allReducers(state, action as ReducerAction);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
