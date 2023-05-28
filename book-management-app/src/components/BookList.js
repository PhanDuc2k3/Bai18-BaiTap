// components/BookList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, updateBook, deleteBook, fetchBooks } from '../redux/actions';
import { addBookApi, deleteBookApi, updateBookApi } from '../redux/api/books';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = async () => {
    const book = { title: 'New Book', author: 'New Author' };
    const newBook = await addBookApi(book);
    dispatch(addBook(newBook));
  };

  const handleUpdateBook = async (book) => {
    const updatedBook = { ...book, author: 'Updated Author' };
    const newBook = await updateBookApi(updatedBook);
    dispatch(updateBook(newBook));
  };

  const handleDeleteBook = async (bookId) => {
    await deleteBookApi(bookId);
    dispatch(deleteBook(bookId));
  };

  return (
    <div>
      <button onClick={handleAddBook}>Add Book</button>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>{book.title} - {book.author}</span>
            <button onClick={() => handleUpdateBook(book)}>Update</button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
