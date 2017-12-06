import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import getReducer from 'src/redux/getReducer';
import thunk from 'redux-thunk';

function getEnhancer() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middleware = [thunk];

  return composeEnhancers(applyMiddleware(...middleware));
}

export default function getStore() {
  const store = createStore(getReducer(), getEnhancer());
  const persistor = persistStore(store);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./getReducer', () => {
      store.replaceReducer(require('./getReducer').default());
    });
  }

  return { store, persistor };
}
