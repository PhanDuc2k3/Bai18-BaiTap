import { put, takeEvery, all } from 'redux-saga/effects';
import { setBooks } from './actions';
import * as api from './api/index';

function* fetchBooksSaga() {
  try {
    const books = yield api.fetchBooks();
    yield put(setBooks(books));
  } catch (error) {
    console.log('Error fetching books:', error);
  }
}

function* addBookSaga(action) {
  try {
    const book = yield api.addBook(action.payload);
    yield put({ type: 'SET_BOOKS', payload: book });
  } catch (error) {
    console.log('Error adding book:', error);
  }
}

function* updateBookSaga(action) {
  try {
    const book = yield api.updateBook(action.payload);
    yield put({ type: 'SET_BOOKS', payload: book });
  } catch (error) {
    console.log('Error updating book:', error);
  }
}

function* deleteBookSaga(action) {
  try {
    yield api.deleteBook(action.payload);
    yield put({ type: 'DELETE_BOOK', payload: action.payload });
  } catch (error) {
    console.log('Error deleting book:', error);
  }
}

function* watchBooks() {
  yield takeEvery('FETCH_BOOKS', fetchBooksSaga);
  yield takeEvery('ADD_BOOK', addBookSaga);
  yield takeEvery('UPDATE_BOOK', updateBookSaga);
  yield takeEvery('DELETE_BOOK', deleteBookSaga);
}

export default function* rootSaga() {
  yield all([watchBooks()]);
}
