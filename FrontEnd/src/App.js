import React, { Component } from 'react';
import './App.css';
import TodoList from './todoList';
class App extends Component {
  render() {
    return (
      <div className='col-12 col-md-8 offset-md-2 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4'>
        <TodoList />
      </div>

    );
  }
}

export default App;
