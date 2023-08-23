import React from 'react';
import { FaCheck } from 'react-icons/fa';

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        justifyContent: 'center', 
        padding: '1px', 
        borderRadius: '4px', 
        marginBottom: '1px' 
      }}
    >
      {todo.completed && <FaCheck style={{ marginRight: '0.5rem' }} />}
      <div style={{ color: todo.completed ? 'green' : 'black' }}>{todo.text}</div>
    </div>
  );
};

export default TodoItem;
