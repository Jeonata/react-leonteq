/* eslint-disable @typescript-eslint/no-explicit-any */
export enum Types {
  CLEAR_APP = '@CLEAR_APP',
}

export interface ReducerAction {
  type: string;
  payload: any;
}

export interface ApiResponse {
  status: number;
  data?: unknown;
  error?: boolean;
  message?: unknown;
}
