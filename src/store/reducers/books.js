import { GET_BOOKS,GET_SINGLE_BOOK } from '../actions/types';

const initialState = () => {
  return {
    list: [],
    value: {
      _id: 0,
      title: '',
      description: ''
    }
  };
};

export default function(state = initialState(), action = {}) {
  switch (action.type) {
    case GET_BOOKS: {
      return { ...state, ...{ list: action.data } };
    }
    case GET_SINGLE_BOOK: {
      return { ...state, ...{ value: action.data } };
    }
    default:
      return state;
  }
}
