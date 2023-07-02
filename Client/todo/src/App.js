import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const TodoListApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      if (editIndex !== -1) {
        // Update existing todo
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = inputValue;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        // Add new todo
        setTodos([...todos, inputValue]);
      }
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTodo}>{editIndex !== -1 ? 'Update' : 'Add'}</button>
      </div>
      <ul>
  {todos.map((todo, index) => (
    <li key={index} className={`todo-item-${index % 5 + 1}`}>
      <span className={index === editIndex ? 'edit' : ''}>{todo}</span>
      <div>
        <button className="edit-button" onClick={() => editTodo(index)}>
          Edit
        </button>
        <button className="delete-button" onClick={() => deleteTodo(index)}>
          Delete
        </button>
      </div>
    </li>
  ))}
</ul>

    </div>
  );
};

export default TodoListApp;
