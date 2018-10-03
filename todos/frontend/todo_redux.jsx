import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import allTodos from './reducers/selectors';
import { receiveTodo, receiveTodos } from './actions/todo_actions';


document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const store = configureStore();
  // window.store = store;
  // window.allTodos = allTodos;
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.newTodos = newTodos;
  ReactDOM.render(<Root store={store} />, rootElement);

});



const newTodos = {
  4: {
    id: 4,
    title: 'wash house',
    body: 'with soap',
    done: false
  },
  5: {
    id: 5,
    title: 'wash carpet',
    body: 'with shampoo',
    done: true
  },
};
