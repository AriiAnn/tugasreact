import React, { useState } from "react";
import "./App.css";
import FormTodo from "./FormTodo";
import TodoItem from "./TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTask = (todoId) => {
    const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, isCompleted: true } : todo));
    setTodos(updatedTodos);
  };

  const removeTask = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const undoTask = (todoId) => {
    const updatedTodos = todos.map((todo) => (todo.id === todoId ? { ...todo, isCompleted: false } : todo));
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <div className="wrapper">
        <FormTodo addTodo={addTodo} />
        <div className="container">
          <h2 className="container-header">Yang harus dilakukan</h2>
          {todos
            .filter((todo) => !todo.isCompleted)
            .map((todo) => (
              <TodoItem key={todo.id} todoItem={todo} completeTask={completeTask} removeTask={removeTask} undoTask={undoTask} />
            ))}
        </div>
        <div className="container">
          <h2 className="container-header">Yang sudah dilakukan</h2>
          {todos
            .filter((todo) => todo.isCompleted)
            .map((todo) => (
              <TodoItem key={todo.id} todoItem={todo} completeTask={completeTask} removeTask={removeTask} undoTask={undoTask} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default App;
