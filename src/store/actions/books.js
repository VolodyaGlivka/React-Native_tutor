import { GET_BOOKS } from './types';
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
}
