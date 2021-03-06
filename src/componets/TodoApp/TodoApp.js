import React from "react";
import { Provider } from "react-redux";
import { store } from "../../redux";
import './TodoApp.css';

import TodoInput from "./TodoInput/TodoInput";
import TodoList from "./TodoList/TodoList";

function TodoApp() {
  return (
    <Provider store={store}>
      <div className="main">
        <h2>Todo App</h2>
        <TodoInput />
        <TodoList />
      </div>
    </Provider>
  );
}

export default TodoApp;
