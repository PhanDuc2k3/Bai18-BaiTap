let books = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
];
let nextBookId = 4;

export const fetchBooks = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 1000);
  });
};

export const addBook = (book) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newBook = { id: nextBookId++, ...book };
      books.push(newBook);
      resolve(newBook);
    }, 500);
  });
};

export const updateBook = (book) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = books.findIndex((b) => b.id === book.id);
      if (index !== -1) {
        books[index] = book;
      }
      resolve(book);
    }, 500);
  });
};

export const deleteBook = (bookId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      books = books.filter((book) => book.id !== bookId);
      resolve();
    }, 500);
  });
};
