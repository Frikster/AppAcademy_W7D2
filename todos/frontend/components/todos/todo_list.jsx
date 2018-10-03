import {connect} from 'react-redux';
import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'

  const ToDoList = ({todos, receiveTodo}) => {
    return (
      <div>
         <h3>Todo List goes here!</h3>
        <ul>
            {todos.map((todo)=> TodoListItem(todo))}
        </ul>
        < TodoForm receiveTodo={receiveTodo} />
      </div>
    )};
// module.exports = () => <h3>Todo List goes here!</h3>;

export default ToDoList;
