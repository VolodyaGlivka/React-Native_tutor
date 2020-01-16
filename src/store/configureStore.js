import { applyMiddleware, compose, createStore } from 'redux';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(), // root reducer with router state
    preloadedState,
    compose(applyMiddleware(thunk))
  );

  return store;
}
