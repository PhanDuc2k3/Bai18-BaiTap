export const fetchBooks = () => ({
    type: 'FETCH_BOOKS',
  });
  
  export const setBooks = (books) => ({
    type: 'SET_BOOKS',
    payload: books,
  });
  
  export const addBook = (book) => ({
    type: 'ADD_BOOK',
    payload: book,
  });
  
  export const updateBook = (book) => ({
    type: 'UPDATE_BOOK',
    payload: book,
  });
  
  export const deleteBook = (bookId) => ({
    type: 'DELETE_BOOK',
    payload: bookId,
  });
  