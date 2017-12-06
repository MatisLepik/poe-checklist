import 'normalize-css/normalize.css';
import './index.css';

import App from 'src/App';
import createStore from 'src/redux/createStore';
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/es/integration/react';
// import registerServiceWorker from 'src/registerServiceWorker';

const { store, persistor } = createStore();

const rootEl = document.getElementById('root');

function render(Component) {
  ReactDOM.render(
    <PersistGate loading={<div />} persistor={persistor}>
      <Component store={store} />
    </PersistGate>,
    rootEl
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App').default);
  });
}

// Disabled because app runs on http
// registerServiceWorker();
