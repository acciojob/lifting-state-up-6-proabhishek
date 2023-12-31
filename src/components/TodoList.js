import React from 'react';

const TodoList = ({ todos, onComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p>{todo.text}</p>
          {!todo.completed && <button onClick={() => onComplete(todo.id)}>Complete</button>}

        </li>
      ))}
    </ul>
  );
};

export default TodoList;
