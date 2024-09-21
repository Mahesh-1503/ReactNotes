// src/components/EventHandlingExample5.js
import React, { useState } from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => (
  <li>
    <span
      style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </span>
    <button onClick={() => onDelete(todo.id)}>Delete</button>
  </li>
);

const EventHandlingExample5 = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleAddTodo = () => {
    if (inputText.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputText, completed: false }]);
      setInputText('');
    }
  };

  const handleToggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggleTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
      {todos.length === 0 && <p>No todos yet. Add some!</p>}
    </div>
  );
};

export default EventHandlingExample5;