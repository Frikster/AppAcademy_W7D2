import {connect} from 'react-redux';
import React from 'react';

class TodoForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {title: '', body: '', done: false}
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  updateTodo(event) {
    event.preventDefault();
    this.props.receiveTodo(this.state);
  }

updateTitle(event) {
  // return () => this.setState({title: event.currentTarget.value}); TODO: Why does this work?
  this.setState({title: event.currentTarget.value});
}

updateBody(event) {
  this.setState({body: event.currentTarget.value});
}

  render() {
    return (
      <div>
        <form>
          <label> Todo Title
            <input onChange={this.updateTitle} type='text' value={this.state.title}/>
          </label>
          <label> Todo Body
            <input onChange={this.updateBody}  type='text' value={this.state.body}/>
          </label>
          <button onClick={this.updateTodo}>Add Todo</button>
        </form>
      </div>
    )}
}


export default TodoForm;
