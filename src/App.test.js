import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import createStore from '../src/redux/createStore';

it('renders without crashing', () => {
  const store = createStore().store;
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
});
