import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';

import rootSaga from './modules/rootSaga';

// TYPES
import { Books } from './modules/books/types';

export interface ApplicationState {
  books: Books;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
};

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
