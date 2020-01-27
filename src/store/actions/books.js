import { GET_BOOKS, GET_SINGLE_BOOK } from './types';
import booksServises from '../services/books';

export default class BooksAction {
  static receiveBooks = data => {
    return {
      type: GET_BOOKS,
      data
    };
  };

  static getBooks = () => {
    return function(dispatch) {
      booksServises
        .getBooksData()
        .then(data => {
          dispatch(BooksAction.receiveBooks(data));
        })
        .catch(err => {
          console.log('Помилка', err.message);
        });
    };
  };

  static receiveSingleBook = data => {
    return {
      type: GET_SINGLE_BOOK,
      data
    };
  };

  static getSingleBook = bookId => {
    return function(dispatch) {
      booksServises
        .getSingleBookData(bookId)
        .then(data => {
          dispatch(BooksAction.receiveSingleBook(data));
        })
        .catch(err => {
          console.log('Помилка', err.message);
        });
    };
  };
}
