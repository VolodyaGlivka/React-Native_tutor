import { applyMiddleware, createStore } from 'redux';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),// root reducer with router state
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}
