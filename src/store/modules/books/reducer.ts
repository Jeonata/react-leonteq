import produce from 'immer';

import { ReducerAction } from '../types';

import { Types, Books } from './types';

export const INITIAL_STATE: Books = {
  status: 0,
  data: [],
};

export default function modules(
  state = INITIAL_STATE,
  action: ReducerAction,
): Books {
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_BOOKS: {
        break;
      }
      case Types.GET_BOOKS_SUCCESS: {
        draft.data = action.payload.data;
        break;
      }
      case Types.GET_BOOKS_FAILURE: {
        break;
      }
      case Types.GET_BOOKS_CLEAR: {
        draft.data = [];
        break;
      }
      default:
    }
  });
}
