import React, { useState } from 'react';
import TodoList from './TodoList';

const ParentComponent = () => {
  // Initial state of todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false }
   
  ]);

  // Function to mark a todo as completed
  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) => 
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList todos={todos} onComplete={handleComplete} />
    </div>
  );
};

export default ParentComponent;
