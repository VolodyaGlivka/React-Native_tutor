import { GET_BOOKS } from '../actions/types';

const initialState = () => {
  return {
    list: []
  };
};

export default function(state = initialState(), action = {}) {
  switch (action.type) {
    case GET_BOOKS: {
      return { ...state, ...{ list: action.data } };
    }
    default:
      return state;
  }
}
