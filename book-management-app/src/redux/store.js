import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import booksReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(booksReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
