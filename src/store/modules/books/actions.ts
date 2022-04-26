import { ReducerAction } from '../types';

import { Types } from './types';

export function getBooksRequest(): ReducerAction {
  return {
    type: Types.GET_BOOKS,
    payload: null,
  };
}
export function getBooksSuccess(payload: unknown | object): ReducerAction {
  return {
    type: Types.GET_BOOKS_SUCCESS,
    payload,
  };
}
export function getBooksFailure(payload: unknown): ReducerAction {
  return {
    type: Types.GET_BOOKS_FAILURE,
    payload,
  };
}
export function getBooksClear(): ReducerAction {
  return {
    type: Types.GET_BOOKS_CLEAR,
    payload: null,
  };
}
