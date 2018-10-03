import {connect} from 'react-redux';
import ToDoList from './todo_list';
import React from 'react';
// debugger;
import { receiveTodo, receiveTodos } from '../../actions/todo_actions';
import allTodos from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);
