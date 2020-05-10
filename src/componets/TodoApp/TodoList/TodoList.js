import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodoAction, deleteTodoAction } from "../../../redux";
import './TodoList.css';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const toggleTodo = useCallback(
    (todoId) => dispatch(toggleTodoAction(todoId)),
    [dispatch]
  );

  const deleteTodo = useCallback(
    (todoId) => dispatch(deleteTodoAction(todoId)),
    [dispatch]
  );
  
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={toggleTodo.bind(null, todo.id)}
          />
          <span className={todo.complete ? "comlpete" : null}>{todo.name}</span>
          <span className="delete-button" onClick={deleteTodo.bind(null, todo.id)}>
            X
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
