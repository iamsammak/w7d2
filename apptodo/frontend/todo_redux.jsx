
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import {allTodos} from './reducers/selector';

import {requestTodos} from './actions/todo_actions';

// const Root =

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('content');
  ReactDOM.render(<h1>H!H!H!</h1>, root);
  window.requestTodos = requestTodos;
  window.allTodos = allTodos;
  window.store = store;
});
