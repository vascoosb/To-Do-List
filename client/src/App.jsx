import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState([]);

  // Function to add a new todo
  const addTodo = (todoText) => {
    const newTodo = {
      id: todos.length + 1,
      text: todoText,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Function to remove a todo
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} removeTodo={removeTodo} />
      </header>
    </div>
  );
}

export default App;