import merge from 'lodash/merge';
import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  // const newState = merge({}, state);
  const newState = {};
  switch(action.type) {
    case (RECEIVE_TODO):
      newState[action.todo.id] = action.todo;
      // merge({ id: 3, title: "New" }, { 1: { ... }, 2: { ... }})
      // const newState = merge(action.todo, state) ;
      return merge({}, state, newState);
    case (RECEIVE_TODOS):
      return action.todos;
    default:
      return state;
  }
};

export default todosReducer;
