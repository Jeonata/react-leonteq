export enum Types {
  GET_BOOKS = '@books/GET_BOOKS',
  GET_BOOKS_SUCCESS = '@books/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE = '@books/GET_BOOKS_FAILURE',
  GET_BOOKS_CLEAR = '@books/GET_BOOKS_CLEAR',
}

export interface Books {
  status: number;
  data: BookData[];
}

export interface BookData {
  id: number;
  title: string;
  description: string;
  pageCount: number;
  excerpt: string;
  publishDate: string;
}
