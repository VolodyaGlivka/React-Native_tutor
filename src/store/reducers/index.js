import { combineReducers } from 'redux';
import booksReducer from './books';
const createRootReducer = () => combineReducers({
  books: booksReducer
});

export default createRootReducer;
