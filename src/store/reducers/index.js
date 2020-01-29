import { combineReducers } from 'redux';
import booksReducer from './books';
import authReducer from './auth';
const createRootReducer = () =>
  combineReducers({
    books: booksReducer,
    auth: authReducer
  });

export default createRootReducer;
