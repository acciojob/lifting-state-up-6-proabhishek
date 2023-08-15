import React from 'react';

const TodoList = ({ todos, onComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
          {!todo.completed && <button onClick={() => onComplete(todo.id)}>Complete</button>}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
