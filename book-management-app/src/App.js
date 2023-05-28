import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks, addBook, updateBook, deleteBook } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleAddBook = () => {
    dispatch(addBook({ title, author }));
    setTitle('');
    setAuthor('');
  };

  const handleUpdateBook = (book) => {
    dispatch(updateBook(book));
  };

  const handleDeleteBook = (bookId) => {
    dispatch(deleteBook(bookId));
  };

  return (
    <div>
      <div>Bai 2</div>
      <h1>Book Management App</h1>
      <div>
        <h3>Add Book</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
        />
        <button onClick={handleAddBook}>Add</button>
      </div>
      <div>
        <h3>Books</h3>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              {book.title} - {book.author}
              <button onClick={() => handleUpdateBook(book)}>Update</button>
              <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
