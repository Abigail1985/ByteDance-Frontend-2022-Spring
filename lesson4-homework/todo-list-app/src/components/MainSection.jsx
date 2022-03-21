import React from 'react';
import { useStore } from 'laco-react';
import {
  TodoStore,
  completeAllTodos,
  clearCompletedTodos,
  getCompletedCount,
} from '../stores/todo';
import TodoList from './TodoList';
import Footer from './Footer';

const MainSection = () => {
  const { todos } = useStore(TodoStore);
  const todosCount = todos.length;
  const completedCount = getCompletedCount(todos);
  return (
    <section className="main">
      {Boolean(todosCount) && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            defaultChecked={completedCount === todosCount}
          />
          <label onClick={completeAllTodos} />
        </span>
      )}
      <TodoList />
      {Boolean(todosCount) && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={clearCompletedTodos}
        />
      )}
    </section>
  );
};

export default MainSection;
