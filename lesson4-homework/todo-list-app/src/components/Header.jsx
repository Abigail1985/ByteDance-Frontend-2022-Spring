import React from 'react';
import { addTodo } from '../stores/todo';
import TodoTextInput from './TodoTextInput';

const Header = () => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo={true}
      onSave={text => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

export default Header;
